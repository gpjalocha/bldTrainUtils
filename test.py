#!/bin/python
import asyncio
import logging
import random

from bleak import discover
from bleak import BleakClient

from sympy.combinatorics import Permutation
from datetime import datetime

from Cryptodome.Cipher import AES
from re import match

sticker_map={
    'edges':
        {'UR':[0,0],
         'UF':[1,0],
         'UL':[2,0],
         'UB':[3,0],
         'DR':[4,0],
         'DF':[5,0],
         'DL':[6,0],
         'DB':[7,0],
         'FR':[8,0],
         'FL':[9,0],
         'BL':[10,0],
         'BR':[11,0],
         'RU':[0,1],
         'FU':[1,1],
         'LU':[2,1],
         'BU':[3,1],
         'RD':[4,1],
         'FD':[5,1],
         'LD':[6,1],
         'BD':[7,1],
         'RF':[8,1],
         'LF':[9,1],
         'LB':[10,1],
         'RB':[11,1]},
    'corners':
        {'UFR':[0,0],
         'UFL':[1,0],
         'UBL':[2,0],
         'UBR':[3,0],
         'DFR':[4,0],
         'DFL':[5,0],
         'DBL':[6,0],
         'DBR':[7,0],
         'RFU':[0,1],
         'FLU':[1,1],
         'LBU':[2,1],
         'BRU':[3,1],
         'FDR':[4,1],
         'LDF':[5,1],
         'BDL':[6,1],
         'RDB':[7,1],
         'FRU':[0,2],
         'LFU':[1,2],
         'BLU':[2,2],
         'RBU':[3,2],
         'RDF':[4,2],
         'FDL':[5,2],
         'LBD':[6,2],
         'BDR':[7,2]}
}

letter_stickers={
    'edges':{
        'A':'UB',
        'B':'UL',
        'C':'UR',
        'D':'LB',
        'E':'DF',
        'F':'DL',
        'G':'DB',
        'H':'DR',
        'I':'RU',
        'J':'FL',
        'K':'FD',
        'L':'FR',
        'M':'BU',
        'N':'BR',
        'O':'BD',
        'P':'BL',
        'R':'LD',
        'S':'RF',
        'T':'RD',
        'U':'RB',
        'W':'LU',
        'Z':'LF'
    },
    'corners':{
        'A':'UBR',
        'B':'UFL',
        'C':'UFR',
        'D':'LBU',
        'E':'DFR',
        'F':'DFL',
        'G':'DBL',
        'H':'DBR',
        'I':'FRU',
        'J':'FLU',
        'K':'FDL',
        'L':'FDR',
        'M':'BLU',
        'P':'BDL',
        'O':'BDR',
        'R':'LBD',
        'S':'RFU',
        'T':'RDF',
        'U':'RBD',
        'W':'LFU',
        'Z':'LDF'}
    }

def convert_lp_to_cycle(lp,el_type,buffer):
    buffer=sticker_map[el_type][buffer]
    perm=[buffer[0]]
    ori=[buffer[1]]
    perm+=[sticker_map[el_type][letter_stickers[el_type][a]][0] for a in lp]
    ori+=[sticker_map[el_type][letter_stickers[el_type][a]][1] for a in lp]
    return el_type,perm,ori



def format_sticker(sticker):
    sticker=list(sticker.upper())
    if len(sticker) == 3:
        if sticker[1]>sticker[2]:
            sticker[1], sticker[2] = sticker[2], sticker[1]
    return(''.join(sticker))
# Top   | Bottom

# 2   3 | 6   7
#   W   |   W
# 1   0 | 5   4
#   G   |   G
#
# Top   | Middle  | Bottom

#   3   | 10   11 |   7
# 2 W 0 |    W    | 6 W 4
#   1   |  9    8 |   5
#   G   |    G    |   G
#
def convert_stickers_to_cycle(stickers):
    if(len(stickers))!=3:
        raise Error('expected array of cycle length 3 like ["UF","UR","UB"]')
    #edges detect
    stickers = [format_sticker(a) for a in stickers]
    st_type = 'edges' if len(stickers[0]) == 2 else 'corners'
    permutation=[]
    orientation=[]
    for st in stickers:
        permutation += [sticker_map[st_type][st][0]]
        orientation +=  [sticker_map[st_type][st][1]]
    return st_type, permutation, orientation

class Cube:
    def __init__(self):
        self.corner_pos   = list(range(8))
        self.corner_twist = [0]*8
        self.edge_pos     = list(range(12))
        self.edge_twist   = [0]*12
        self.move_count   = 0
    def set_state(self, corner_pos, corner_twist, edge_pos, edge_twist):
        self.corner_pos   = corner_pos
        self.corner_twist = corner_twist
        self.edge_pos     = edge_pos
        self.edge_twist   = edge_twist
    def check_raw_state(self, corner_pos, corner_twist, edge_pos, edge_twist):
        if((self.corner_pos   == corner_pos) and
           (self.corner_twist == corner_twist) and
           (self.edge_pos     == edge_pos) and
           (self.edge_twist   == edge_twist)):
            return True
        return False
    def move(self, move):
        for i in range(len(move)):
            corner_perm = []
            edge_perm = []
            twist_corners = False
            twist_edges = False
            # TODO:
            if (move[i] == "U" or move[i] == "Up"):
                corner_perm   = [ 0, 1, 2, 3]
                edge_perm     = [ 0, 1, 2, 3]
                twist_corners = False
                twist_edges   = False
            elif (move[i] == "D" or move[i] == "Dp"):
                corner_perm   = [ 4, 7, 6, 5]
                edge_perm     = [ 4, 7, 6, 5]
                twist_corners = False
                twist_edges   = False
            elif (move[i] == "R" or move[i] == "Rp"):
                corner_perm   = [  3, 7, 4, 0]
                edge_perm     = [ 11, 4, 8, 0]
                # corner_perm   = [ 4, 7, 3, 0]
                # edge_perm     = [ 8, 4,11, 0]
                twist_corners = True
                twist_edges   = False
            elif (move[i] == "L" or move[i] == "Lp"):
                corner_perm   = [ 1, 5, 6, 2]
                edge_perm     = [ 6,10, 2, 9]
                # corner_perm   = [ 1, 2, 6, 5]
                # edge_perm     = [ 2,10, 6, 9]
                twist_corners = True
                twist_edges   = False
            elif (move[i] == "F" or move[i] == "Fp"):
                corner_perm   = [ 0, 4, 5, 1]
                edge_perm     = [ 1, 8, 5, 9]
                # corner_perm   = [ 5, 4, 0, 1]
                # edge_perm     = [ 5, 8, 1, 9]
                twist_corners = True
                twist_edges   = True
            elif (move[i] == "B" or move[i] == "Bp"):
                corner_perm   = [2, 6, 7, 3]
                edge_perm     = [11, 3,10, 7]
                # corner_perm   = [ 2, 3, 7, 6]
                # edge_perm     = [10, 3,11, 7]
                twist_corners = True
                twist_edges   = True
            if (twist_corners):
                or_change = [2,1,2,1]
                self.twist_corners(self.corner_twist, corner_perm, or_change)
            if (len(move[i]) == 2):
                corner_perm.reverse()
                edge_perm.reverse()
            self.permute(edge_perm,corner_perm)
            self.move_count += 1
            if (twist_edges):
                self.twist_edges(self.edge_twist, edge_perm)
    def mirror_moves(self, moves):
        unchanged=['U','Up','D','Dp']
        switch=[
            ['R','Rp','Lp','L','F','Fp','Bp','B'],
            ['Lp','L','R','Rp','Fp','F','B','Bp']
        ]
        moves_mirror=moves.copy()
        for mv in range(len(moves)):
            moves_mirror[mv]=switch[1][switch[0].index(moves[mv])]
        return moves_mirror
    def back_moves(self, moves):
        unchanged=['U','Up','D','Dp']
        switch=[
            ['R','Rp','Lp','L','F','Fp','Bp','B'],
            ['Rp','R','L','Lp','Bp','B','F','Fp']
        ]
        moves_back=moves.copy()
        for mv in range(len(moves)):
            moves_back[mv]=switch[1][switch[0].index(moves[mv])]
        return moves_back
    def permute(self, edge_perm, corner_perm):
        switch_cor=[self.corner_pos[a] for a in corner_perm]
        switch_edg=[self.edge_pos[a]   for a in edge_perm]
        self.corner_pos *= Permutation([switch_cor,[7]])
        self.edge_pos *= Permutation([switch_edg,[11]])
        self.corner_pos = self.corner_pos.array_form
        self.edge_pos = self.edge_pos.array_form
        self.corner_twist = [self.corner_twist[i] for i in Permutation([corner_perm,[7]]).array_form]
        self.edge_twist = [self.edge_twist[i] for i in Permutation([edge_perm,[11]]).array_form]
    def permute_cycle(self, st_type, permutation, orientation):
        pos = self.corner_pos if st_type == 'corners' else self.edge_pos
        ori = self.corner_twist if st_type == 'corners' else self.edge_twist
        or_cycle = 3 if st_type == 'corners' else 2
        el_count = 11 if st_type == 'edges' else 7
        switch=[pos[a] for a in permutation]
        pos *= Permutation([switch,[el_count]])**(-1)
        pos = pos.array_form
        ori[permutation[0]],ori[permutation[1]],ori[permutation[2]]=ori[permutation[2]],ori[permutation[0]],ori[permutation[1]]
        orientation = [
            (orientation[0]+orientation[2]) % or_cycle,
            (orientation[0]+orientation[1]) % or_cycle,
            (orientation[2]+orientation[1]) % or_cycle]
        for i, elpos in enumerate(permutation):
            ori[elpos] = (ori[elpos] + orientation[i]) % or_cycle
        return type, pos, ori
        #011-110, 010-011, 000-000, 001-101
        #100-110, 101-011, 111-000, 110-101
#011 , bufor zorientowany 0 i idzie na niezorientowane 1 -[1]=1, pierwszy niezorientowany idzie na zorientowane [2]=0, trzeci
        # uf ru bu -> [0, 3, 2] [0,1,1]
    #def permute_cwise(self, vec, perm_indices):
    #    buffer = vec[perm_indices[0]]
    #    for i in [0,1,2]:
    #        vec[perm_indices[i]] = vec[perm_indices[i+1]]
    #    vec[perm_indices[3]] = buffer
    #    return vec
    #def permute_ccwise(self, vec, perm_indices):
    #    buffer = vec[perm_indices[3]]
    #    for i in [3,2,1]:
    #        vec[perm_indices[i]] = vec[perm_indices[i-1]]
    #    vec[perm_indices[0]] = buffer
    #    return vec
    def twist_corners(self, vec, perm_indices, or_change):
        for i in range(4):
            vec[perm_indices[i]] = (vec[perm_indices[i]] + or_change[i]) % 3
        return vec
    def twist_edges(self, vec, perm_indices):
        vec[perm_indices[0]] = (vec[perm_indices[0]] + 1) % 2
        vec[perm_indices[1]] = (vec[perm_indices[1]] + 1) % 2
        vec[perm_indices[2]] = (vec[perm_indices[2]] + 1) % 2
        vec[perm_indices[3]] = (vec[perm_indices[3]] + 1) % 2
        return vec
    def print_state(self):
        print(self.corner_pos)
        print(self.corner_twist)
        print(self.edge_pos)
        print(self.edge_twist)


cube=Cube()
cube.permute_cycle('edges',[0,3,2],[0,1,1])


class Bluetooth_cube:

    def __init__(self):

        # Device dependent key
        self.address = "AB:12:34:5e:0c:a5"
        self.device_key = [0xa5, 0x0c, 0x5e, 0x34, 0x12, 0xab]

        # Service UUIDs for GAN bluetooth cubes version 2
        self.UUID_LISTEN = "28be4cb6-cd67-11e9-a32f-2a2ae2dbcce4"
        self.UUID_WRITE = "28be4a4a-cd67-11e9-a32f-2a2ae2dbcce4"

        # Key for GAN bluetooth cubes version 2
        GAN_V2_KEY = [
            0x01, 0x02, 0x42, 0x28, 0x31, 0x91, 0x16, 0x07, 0x20, 0x05, 0x18, 0x54, 0x42, 0x11,
            0x12, 0x53,
        ]
        GAN_V2_IV = [
            0x11, 0x03, 0x32, 0x28, 0x21, 0x01, 0x76, 0x27, 0x20, 0x95, 0x78, 0x14, 0x32, 0x12,
            0x02, 0x43,
        ]

        # Compute device key
        self.key = GAN_V2_KEY;
        self.iv = GAN_V2_IV;
        for idx, byte in enumerate(self.device_key) :
            self.key[idx] = ((self.key[idx] + byte) % 255)
            self.iv[idx] = ((self.iv[idx] + byte) % 255)
        self.key=bytes(self.key)
        self.iv=bytes(self.iv)

        # Move mapping for GAN cube
        self.MOVES = [ "Up", "U", "Rp", "R", "Fp", "F", "Dp", "D", "Lp", "L", "Bp", "B" ];
        # self.MOVES = [ "U", "Up", "R", "Rp", "F", "Fp", "D", "Dp", "L", "Lp", "B", "Bp" ];

        # Write message to initialize cube state reply
        self.MSG_CUBE_STATE = [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

        # Write message to initialize battery state reply
        self.MSG_BATTERY_STATE = [9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

        # Write message to initialize a reset of the cube
        self.MSG_RESET_CUBE_STATE = [10, 0x05, 0x39, 0x77, 0x00, 0x00, 0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]

        # Init virtual cube
        self.solved_state = [[0,1,2,3,4,5,6,7],[0,0,0,0,0,0,0,0],[0,1,2,3,4,5,6,7,8,9,10,11],[0,0,0,0,0,0,0,0,0,0,0,0]]
        self.cube = Cube()

        self.move_count = 0;
        self.cube_initialized = False;


    def decrypt(self, value):

        # decrypt last 16 bytes
        offset = len(value) - 16;
        end_plain = value[offset :]

        cipher = AES.new(self.key,AES.MODE_ECB)
        end_plain = cipher.decrypt(bytes(end_plain))
        for idx,byte in enumerate(end_plain) :
            byte ^=  self.iv[idx];
            value[offset+idx] = byte


        # decrypt first 16 bytes
        start_plain = value[: 16]

        # cipher = AES.new(bytes(self.key), AES.MODE_CBC, bytes(self.iv))
        # cipher.iv = bytes(iv)
        start_plain = cipher.decrypt(bytes(start_plain))
        for idx,byte in enumerate(start_plain) :
            byte ^=  self.iv[idx];
            value[idx] = byte

        return value

    def encrypt(self, value):
        for i in range(16):
            value[i] ^= self.iv[i]
         
        # encrypt first 16 bytes
        start_plain = value[: 16]

        cipher = AES.new(bytes(self.key), AES.MODE_CBC, bytes(self.iv))
        start_plain = cipher.encrypt(bytes(start_plain))
        for idx,byte in enumerate(start_plain) :
            value[idx] = byte
        offset = len(value) - 16;
        for i in range(16):
            value[offset + i] ^= self.iv[i]
        
        # encrypt last 16 bytes
        
        end_plain = value[offset :]

        cipher = AES.new(bytes(self.key), AES.MODE_CBC, bytes(self.iv))
        end_plain = cipher.encrypt(bytes(end_plain))
        for idx,byte in enumerate(end_plain) :
            value[offset+idx] = byte

        return value

    def extract_bits(self, data, start, count):
        result = 0
        for i in range(count):
            bit = start + i
            result = result << 1
            if data[bit // 8] & (1 << (7 - (bit % 8))) != 0:
                result |= 1
        return result

    def notification_handler(self, sender, data):
        data = self.decrypt(data)
        message_type = self.extract_bits(data, 0, 4)
        # print([int(a) for a in data])
        if message_type == 2:
            if (self.cube_initialized):
                current_move_count = self.extract_bits(data, 4, 8)
                move_count = current_move_count - self.move_count
                self.move_count = current_move_count
                for j in range(move_count):
                    i = (move_count - 1) - j
                    move_num = self.extract_bits(data, 12 + i * 5, 5)
                    # move_time = self.extract_bits(data, 12 + 7 * 5 + i * 16, 16)
                    move = self.MOVES[move_num]
                    print(move,' ',end='\r')
                    self.cube.move([move])
                    # print(self.cube.corner_twist)
                    # print(move)
                    # self.cube.print_state()
        elif message_type == 4:
            # self.move_count = self.extract_bits(data, 4, 8)
            self.cube_initialized = True
            [corner_pos, corner_twist] = self.decode_corners(data)
            [edge_pos, edge_twist] = self.decode_edges(data)
            if(self.cube.check_raw_state(corner_pos,corner_twist,edge_pos,edge_twist) == False):
                # print('fucked up state, calculated:')
                # self.cube.print_state()
                print('corrected state')
                # print(corner_pos, corner_twist, edge_pos, edge_twist)
                self.cube.set_state(corner_pos, corner_twist, edge_pos, edge_twist)
            # print('current real pos:\n',self.cube.edge_pos,'\n',self.cube.edge_twist,'\n',end='\r')
            # self.cube.print_state()
            # print(corner_twist)
            # self.decode_battery_state(data)
        elif (message_type == 5) :
            print("Cube reset.")



    def decode_battery_state(self, value):
        percent = self.extract_bits(value, 8, 8)
        print("Battery: ", percent, "%")

    def decode_corners(self, value):
        # Decode corners. There are only 7 in the packet because the
        # last one is implicit (the one missing).
        corners = [0] * 8
        corner_twist = [0] * 8
        total_corner_twist = 0
        corners_left = list(range(8))
        for i in range(7):
            corners[i] = self.extract_bits(value, 12 + i * 3, 3)
            corner_twist[i] = self.extract_bits(value, 33 + i * 2, 2)
            total_corner_twist += corner_twist[i]
            corners_left.remove(corners[i])
        corners[7] = corners_left[0]
        corner_twist[7] = (3 - total_corner_twist % 3) % 3
        # print(corners,corner_twist)
        return corners, corner_twist

    def decode_edges(self, value):
        # Decode edges. There are only 11 in the packet because the
        # last one is implicit (the one missing).
        edges = [0] * 12
        edge_parity = [0] * 12
        total_edge_parity = 0
        edges_left = list(range(12))
        for i in range(11):
            edges[i] = self.extract_bits(value, 47 + i * 4, 4)
            edge_parity[i] = self.extract_bits(value, 91 + i, 1)
            total_edge_parity += edge_parity[i]
            edges_left.remove(edges[i])
        edges[11] = edges_left[0]
        edge_parity[11] = total_edge_parity & 1
        # print(edges,edge_parity)
        return edges, edge_parity

    def is_solved(self):
        corners_solved = (self.cube.corner_pos == self.solved_state[0]) and (self.cube.corner_twist ==
                self.solved_state[1])
        edges_solved = (self.cube.edge_pos == self.solved_state[2]) and (self.cube.edge_twist ==
                self.solved_state[3])
        if (corners_solved and edges_solved):
            return True
        else:
            return False


async def run(bt_cube, debug=False):

    async with BleakClient(bt_cube.address) as client:
        connected = await client.is_connected()
        if (connected):
            print("Connection to cube established.")
            # get initial cube state
            # await client.write_gatt_char(bt_cube.UUID_WRITE, bt_cube.encrypt(bt_cube.MSG_CUBE_STATE))
            # await client.write_gatt_char(bt_cube.UUID_WRITE, bt_cube.encrypt(bt_cube.MSG_BATTERY_STATE))

        await client.start_notify(bt_cube.UUID_LISTEN, bt_cube.notification_handler)
        # await client.write_gatt_char(bt_cube.UUID_WRITE, bt_cube.encrypt(bt_cube.MSG_CUBE_STATE))
        while await client.is_connected():
            await asyncio.sleep(5)
            command = input('end?(y)\ntrain IM?(t)')
            if command == 'y':
                await client.stop_notify(bt_cube.UUID_LISTEN)
                quit()
            elif command == 't':
                #define IM
                expected_corner_pos=bt_cube.cube.corner_pos
                expected_corner_twist=bt_cube.cube.corner_twist
                #load edge letter pairs
                with open('edges.csv') as f:
                    ed=[a[1:3].upper() for a in f.readlines()]
                with open('edges.csv') as f:
                    algorithms=[a[6:-2].upper() for a in f.readlines()]
                print(algorithms)
                filt = input('train all(ALL) or filter subset?(A-Z)? or filter regex(reg)')
                if len(filt) == 1:
                    ed=[a for a in ed if a[0]==filt.upper()]
                if filt=='reg':
                    reg=input('write regex:')
                    filtered=[a for a in algorithms if match(reg,a)]
                    while len(filtered) == 0:
                        print('no algs found, re input regex')
                        reg=input('write regex:')
                        filtered=[a for a in algorithms if match(reg,a)]
                    print('found pairs')
                    print(filtered)
                    ed_=[]
                    for flt in filtered:
                        ed_+=[ed[algorithms.index(flt)],ed[algorithms.index(flt)][1]+ed[algorithms.index(flt)][0]]
                    ed=list(set(ed_))
                print('calculating cycles...')
                random.shuffle(ed)
                print(ed)
                for comm_lp in ed:
                    _, expected_edge_pos,expected_edge_or=convert_lp_to_cycle(comm_lp,'edges','UF')
                    _, expected_edge_pos,expected_edge_or=bt_cube.cube.permute_cycle('edges',expected_edge_pos,expected_edge_or)
                    cont=bt_cube.cube.move_count
                    print('get ready...\n',end='\r')
                    await asyncio.sleep(1)
                    # print(comm_lp,'\n',bt_cube.cube.edge_pos,bt_cube.cube.edge_twist,'\n',expected_edge_pos,expected_edge_or,'\n',end='\r')
                    print('%s\n' % comm_lp ,end='\r')
                    en_reaction=0
                    st=datetime.timestamp(datetime.now())
                    loop=asyncio.get_running_loop()
                    mv_cnt=bt_cube.cube.move_count
                    en_alt=datetime.timestamp(datetime.now())
                    while True:
                        en=datetime.timestamp(datetime.now())
                        if cont == bt_cube.cube.move_count:
                            en_reaction=datetime.timestamp(datetime.now())
                        if mv_cnt < bt_cube.cube.move_count:
                            mv_cnt=bt_cube.cube.move_count
                            en_alt=datetime.timestamp(datetime.now())
                        print('reaction:%0.3f, execution:%0.3f' % tuple([en_reaction-st,en-en_reaction]), end='\r')
                        if (bt_cube.cube.check_raw_state(expected_corner_pos,expected_corner_twist,expected_edge_pos,expected_edge_or) == True):
                            print('DONE. reaction:%0.3f, execution:%0.3f, tps:%0.3f' % tuple([en_reaction-st,min(en,en_alt)-en_reaction,(mv_cnt-cont)/(min(en,en_alt)-en_reaction)]), end='\r')
                            break
                        await asyncio.sleep(.001)
                        if en-st >5:
                            print('too long, quitting.')
                            tout=datetime.timestamp(datetime.now())
                            await asyncio.sleep(.4)
                            tout2=datetime.timestamp(datetime.now())
                            while bt_cube.cube.corner_pos != list(range(8)) and (tout2-tout)<5:
                                print('Correct corners before proceed %i' % (tout2-tout), end='\r')
                                tout2=datetime.timestamp(datetime.now())
                                await asyncio.sleep(.1)
                            if tout2>(tout+5):
                                expected_corner_pos=bt_cube.cube.corner_pos
                                expected_corner_twist=bt_cube.cube.corner_twist
                                print('refreshed cube state' , end='\r')
                            break
                    print('\n',end='\r')
                    with open('res.csv','a') as f:
                        f.write('%s;%0.3f;%0.3f;%0.3f;%i;%0.3f\n' % tuple([comm_lp,en_reaction-st,min(en,en_alt)-en_reaction,min(en,en_alt)-st,mv_cnt-bt_cube.cube.move_count,(mv_cnt-bt_cube.cube.move_count)/(min(en,en_alt)-en_reaction)]))
                    f.close()


        
        # while True:
        #     command = input("end? (y)")
        #     await asyncio.sleep(.1)
        #     bt_cube.cube.print_state()
        #     if command == 'y':
        #         break
        # while (True):
        #     command = input("Enter what you want to do:\n (1) Show cube state.\n (2) Show battery state.\n (3) Sync cube (reset to solved state).\n (4) Play 40s.\n (5) Quit.\n")
        #     if command == '1':
        #         await asyncio.sleep(1)
        #     elif command == '2':
        #         await client.write_gatt_char(bt_cube.UUID_WRITE, bytes(bt_cube.encrypt(bt_cube.MSG_BATTERY_STATE)))
        #     elif command == '3':
        #         await client.write_gatt_char(bt_cube.UUID_WRITE, bytes(bt_cube.encrypt(bt_cube.MSG_RESET_CUBE_STATE)))
        #     elif command == '4':
        #         await asyncio.sleep(40)
        #         # for i in range(40) :
        #         #     await asyncio.sleep(1)
        #         #     print(i)
        #         bt_cube.cube.print_state()
        #     elif command == '5':
        #         break
        #     else:
        #         print('Invalid command.')
        #     await asyncio.sleep(1)

        # for i in range(40):
        #     await asyncio.sleep(1)
        #     if (bt_cube.is_solved()):
        #         print("Cube solved!")
        #         break
        # await asyncio.sleep(1)
        # print(bt_cube.is_solved())

        # await client.stop_notify(bt_cube.UUID_LISTEN)

if __name__ == "__main__":

    #Run notify event
    bt_cube = Bluetooth_cube()
    loop = asyncio.get_event_loop()
    loop.set_debug(True)
    loop.run_until_complete(run(bt_cube, True))
    # bt_cube = Bluetooth_cube()
    # asyncio.run(run(bt_cube, True))
    # bt_cube.cube.print_state()