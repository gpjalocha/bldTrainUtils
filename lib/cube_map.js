
const cnms=["BA","BD","BM","BC","BI","BS","BF","BZ","BK","BG","BP","BR","BH","BU","BO","BE","BL","BT","JA","JD","JM","JC","JI","JS","JF","JZ","JK","JG","JP","JR","JH","JU","JO","JE","JL","JT","WA","WD","WM","WC","WI","WS","WF","WZ","WK","WG","WP","WR","WH","WU","WO","WE","WL","WT","AB","AJ","AW","AC","AI","AS","AF","AZ","AK","AG","AP","AR","AH","AU","AO","AE","AL","AT","DB","DJ","DW","DC","DI","DS","DF","DZ","DK","DG","DP","DR","DH","DU","DO","DE","DL","DT","MB","MJ","MW","MC","MI","MS","MF","MZ","MK","MG","MP","MR","MH","MU","MO","ME","ML","MT","CB","CJ","CW","CA","CD","CM","CF","CZ","CK","CG","CP","CR","CH","CU","CO","CE","CL","CT","IB","IJ","IW","IA","ID","IM","IF","IZ","IK","IG","IP","IR","IH","IU","IO","IE","IL","IT","SB","SJ","SW","SA","SD","SM","SF","SZ","SK","SG","SP","SR","SH","SU","SO","SE","SL","ST","FB","FJ","FW","FA","FD","FM","FC","FI","FS","FG","FP","FR","FH","FU","FO","FE","FL","FT","ZB","ZJ","ZW","ZA","ZD","ZM","ZC","ZI","ZS","ZG","ZP","ZR","ZH","ZU","ZO","ZE","ZL","ZT","KB","KJ","KW","KA","KD","KM","KC","KI","KS","KG","KP","KR","KH","KU","KO","KE","KL","KT","GB","GJ","GW","GA","GD","GM","GC","GI","GS","GF","GZ","GK","GH","GU","GO","GE","GL","GT","PB","PJ","PW","PA","PD","PM","PC","PI","PS","PF","PZ","PK","PH","PU","PO","PE","PL","PT","RB","RJ","RW","RA","RD","RM","RC","RI","RS","RF","RZ","RK","RH","RU","RO","RE","RL","RT","HB","HJ","HW","HA","HD","HM","HC","HI","HS","HF","HZ","HK","HG","HP","HR","HE","HL","HT","UB","UJ","UW","UA","UD","UM","UC","UI","US","UF","UZ","UK","UG","UP","UR","UE","UL","UT","OB","OJ","OW","OA","OD","OM","OC","OI","OS","OF","OZ","OK","OG","OP","OR","OE","OL","OT","EB","EJ","EW","EA","ED","EM","EC","EI","ES","EF","EZ","EK","EG","EP","ER","EH","EU","EO","LB","LJ","LW","LA","LD","LM","LC","LI","LS","LF","LZ","LK","LG","LP","LR","LH","LU","LO","TB","TJ","TW","TA","TD","TM","TC","TI","TS","TF","TZ","TK","TG","TP","TR","TH","TU","TO"]
const calgs=["R' U' D' R' D R U' R' D' R U2 D R","U' R2 D R' U2 R D' R' U2 R' U","U' R' U' R' D' R U R' D R2 U","l U D R' D' R U' R' D R D' l'","R' U' D' R' D R U R' D' R D R","U' R' U2 R' D' R U2 R' D R2 U","U' x' R U R' D2 R U' R' D2 x U","R' D R U' R' D' R U","D R' D' R U' R' D R U D'","R' D' R2 U' R' D R U R' D' R' D R","D R' D R U' R' D' R U D'","U' R D' R' U' R D R' U2","R D' R2 D R U' R' D' R U R D R'","U' R D R' U' R D' R' U2","D' R' D' R U' R' D R U D","D R D' R2 D R U' R' D' R U R D R' D'","D' R' D R U' R' D' R U D","R' D' R U' R' D R U","x R2 D2 R U2 R' D2 R U2 R x'","l' U' R D' R' U2 R D R' U' l","R U R' U2 D' R' D R U2 R' D' R D R U' R'","R2 D R' U2 R D' R' U2 R'","R U D' R' D' R U2 R' D R U D R'","R' U' R2 D' R2 D R2 U R2 D' R2 D R'","R U D R' D' R U2 R' D R U D' R'","R' D F2 D' R D R' F2 R D'","R U R' D R U2 R' D' R U R'","R2 D' R' U2 R D R' U2 R'","D R' D F2 D' R D R' F2 R D2","R' l' D R U2 R' D' R U2 l","D R2 D' R' U2 R D R' U2 R' D'","R U D' R' D R U2 R' D' R U D R'","R U R' D' R U2 R' D R U R'","D' R U D R' D' R U2 R' D R U D' R' D","D' R' D F2 D' R D R' F2 R","D' R U R' D R U2 R' D' R U R' D","F R' D' R U2 R' D R U2 F'","U' R' U L U' R U L'","x' R U' R' D R U R' D' x","R' U' R' D' R U R' D R2","R' F R U R' D R U' R' D' F' R","F' U R' D R U2 R' D' R U F","U' R' U R U' R' D R U R' U' D' R U","R' U' D R U R' D' R U' R' U R","D R' U' D' R U R' D R U' R' U R D'","R2 D2 R U' R' D R U R' D R2","x' R U2 R' D R U2 R' D' x","R' U' R U' R D' R' U R D R2 U R","R U' R' D R' U R D' R' U' R2 U R'","R' U' R' D' R U2 R' D R U' R","F D' R U R' D R U' R' F'","R U' R2 D' R U2 R' D R U2 R U R'","F D R U R' D' R U' R' F'","R' U' D' R U R' D R U' R' U R","R' U2 D' R' D R U R' D' R U D R","l' U2 R' D2 R U2 R' D2 R l","F U2 R' D' R U2 R' D R F'","l' U R' D2 R U' R' D2 R l","R' U2 D' R' D R U2 R' D' R D R","R' U D R2 U' R' D' R U R' D R' U' D' R","R F' R' U' R D R' U2 R D' R' U' R F R'","R' D R U2 R' D' R U2","D R' D' R U2 R' D R U2 D'","R' U' D' R2 U' R' D R U R' D' R' U D R","U' D' R D R' U2 R D' R' U' D","U' R D' R' U2 R D R' U'","R D' R2 D R U2 R' D' R U2 R D R'","U' R D R' U2 R D' R' U'","U' D R D' R' U2 R D R' U' D'","R2 U R2 D R2 D' R2 U' R2 D R2 D'","D' R' D R U2 R' D' R U2 D","R' D' R U2 R' D R U2","U' R U2 R D R' U2 R D' R2 U","l' U R D' R' U2 R D R' U l","L U' R' U L' U' R U","R2 D R' U R D' R' U' R'","U R' U' R' D' R U R' D R2 U'","R' D R2 D' R2 U R2 D R2 D' R2 U' R'","R2 D2 R' U R D2 R' U' R'","U R' U' R' D R U R' D' R2 U'","R U R' D R U R' D' R U2 R'","R2 D' R' U R D R' U' R'","U R' U' R' D2 R U R' D2 R2 U'","R D' R D R' U R D' R' U' D R'","D R2 D' R' U R D R' U' R' D'","U' R2 U' R' D' R U R' D R' U","R U R' D' R U R' D R U2 R'","D2 R2 D' R' U R D R' U' R' D2","R U R2 D' R U' R' D R U R U' R'","U R' U2 R D R' U R D' R' U R U'","U' R2 D' R U' R' D R U R U","R U R' D' R' D R U2 R' D' R U2 D R U' R'","x' D R U' R' D' R U R' x","R' U2 R' D' R U2 R' D R2","U' L' U R U' L U R'","U R2 D R' U2 R D' R' U2 R' U'","U' R2 D R U' R' D' R U R U","R' D2 R' U R D' R' U' R D' R","D R2 U R D R' U' R D' R D'","U' D R2 D R U' R' D' R U R U D'","R' D' R' U R D2 R' U' R D' R","U2 R U R D' R' U' R D R2 U2","U R D' R U' R' D R U R2 U'","R' U2 R' D' R U' R' D R U' R","D' R2 U R D R' U' R D' R D","U' D' R2 D R U' R' D' R U R U D","D R' U2 R' D' R U' R' D R U' R D'","R2 U R D R' U' R D' R","l D R' D' R U R' D R U' D' l'","R U2 R D R' U2 R D' R2","R2 D' R U' R' D R U R","R' l' D2 R U R' D2 R U' l","R U R D R' U' R D' R2","R2 D' R U2 R' D R U2 R","x' D2 R U R' D2 R U' R' x","R' D R U R' D' R U'","D R' D' R U R' D R U' D'","l' D R' D' R U R' D R U' D' l","U' D' R D R' U R D' R' D","U' R D' R' U R D R'","U' R2 D R2 D' R2 U R2 D R2 D' R2","U' R D R' U R D' R'","D' R' D' R U R' D R U' D","R' D R U' R D' R' U R D R' U R' D' R U'","D' R' D R U R' D' R U' D","R' D' R U R' D R U'","R' D' R' D R U' R' D' R U D R","R U' D' R' D' R U2 R' D R U' D R'","R' F D R U R' D' R U' R' F' R","R' D' R' D R U2 R' D' R U2 D R","U R2 D' R U' R' D R U R U'","R U' L' U R' U' L U","D' R U' R' U R D' R' U' R U D R' D","R' U D R U' R' D' R U R' U' R","R' F D R U' R' D' R U R' F' R","R U' R' U R D' R' U' R U D R'","R' U D2 R U' R' D2 R U R' U' R","R U' L U R' U' L' U","D R U' R' U R D' R' U' R U D R' D'","U' R U D R' U' R D' R' U R U' R' U","R U' R' U R D R' U' R U D' R'","U R' U' R U R' D' R U' R' U D R U'","D' R' U D R U' R' D' R U R' U' R D","R' U D' R U' R' D R U R' U' R","U' R2 D' R U2 R' D R U2 R U","R D' R2 D R2 U' R2 D' R2 D R2 U R","F' U' R' D R U2 R' D' R U' F","R' U D R D' R U' R' D R U R2 U' D' R","R U R2 D R2 D' R2 U' R2 D R2 D' R","U R U2 R D R' U2 R D' R2 U'","U' R2 D R U2 R' D' R U2 R U","U R U' R' D R U2 R' D' R U' R' U'","U D' R U2 R D' R' U2 R D R2 U' D","U' D R2 D R U2 R' D' R U2 R U D'","U' R' U' R D' R' U2 R D R' U' R U","U R U2 R D' R' U2 R D R2 U'","F' U2 R D R' U2 R D' R' F","U R U' R' D' R U2 R' D R U' R' U'","U D R U2 R D' R' U2 R D R2 U' D'","U' D' R2 D R U2 R' D' R U2 R U D","U' R' U' R D R' U2 R D' R' U' R U","R U' R2 D R2 D' R2 U R2 D R2 D' R","U' F2 R B R' F2 R B' R' U","R U' D R' D' R U2 R' D R U' D' R'","U' R' U D R U' R' D' R U R' U' R U","R F' R' U R D R' U2 R D' R' U R F R'","R U R D2 R' U' R D2 R2","U' R' U' R' D R U R' D' R2 U","x' R U R' D2 R U' R' D2 x","D' R U' D' R' U R D R' U' R U R' D","U' R' U2 R' D R U2 R' D' R2 U","R U' D2 R' U R D R' U' R U D R'","l U D' R D R' U2 R D' R' U D l'","D R U' R' U2 R' D R U2 R' D' R2 U R' D'","R U' R' D2 R' U R D2 R' U' R2 U R'","U' R' U R' D R U' R' D' R2 U","D' R U' R D' R' U R D R2 D","U' R' F' R U' R' D' R U R' D F R U","R F2 R' U R U' F2 U R' U'","R D R' D' R U R' D R U' D' R'","U' R' D R U R' D' R","D R' F2 R D' R' D F2 D' R","R' U' R U R' D R U' R' U D' R","U2 R' D R U2 R' D' R","U R2 D R U' R' D' R U R U'","R' D R' U R D R' U' R D2 R","U R' D R U' R' D' R","R' U R U' R' D R U R' U' D' R","U R U R' D R U2 R' D' R U R' U'","U D R U' F2 U R' U' R F2 R' D'","U D R U' R' D R U R' U' D2","D R' F' R D' R' D F D' R","U R D R U' R' D' R U R2 U'","U D R U' R' D2 R U R' U' D","R' U' R U2 R' D R U2 R' U D' R","U' R' D R2 D' R' U' R D R' U R' D' R U","U D R U' R' D' R U R' U'","U R' D R U' R' D2 R U R' D R U'","U' D R' D' R U R' D R D'","R U' R' D R U2 R' D' R U' R'","D R' U' R U R' D' R U' R' U D R D'","U2 D R' D' R U2 R' D R D'","R U2 R' D R U' R' D' R U' R'","D R' D R' U R D' R' U' R2 D'","U D R' D' R U' R' D R D'","R' F R U' R' D R U R' D' F' R","U D' R2 D' R' U2 R D R' U2 R' U' D","l' D R' D' R U' R' D R U D' l","D' R D' R' U' R D2 R' U R D' R' D","D R U R' D R U' R' D2","D R2 D' R' U' R D R' U R' D'","R D2 R' U' R D' R' U R D' R'","D R U R' D2 R U' R' D","R U' R2 D R U2 R' D' R U2 R U R'","D' R' D F' D' R D R' F R","D R U R' D' R U' R'","R' D' R D R U' R' D' R U R2 D R","R U2 R D' R' U2 R D R2","R2 D' R U' R' D' R U R' D2 R2","R' U' D' R D R U' R' D' R U R2 U D R","R U R D' R' U' R D R2","U' D R' U' R' D R U R' D' R2 U D'","l' U D R' D' R U' R' D R D' l","R U' D' R' U R D R' U' R U R'","U' D R' U2 R' D R U2 R' D' R2 U D'","R U' D' R' U R D' R' U' R U D2 R'","D R F2 R' U R U' F2 U R' U' D'","l' U' D R' D' R U R' D R D' l","R U' R' D' R' U R D R' U' R2 U R'","U' R' U R' D2 R U' R' D2 R2 U","R U' D' R' U R D2 R' U' R U D' R'","R U' R' U' R D' R' U2 R D R' U' R U R'","U' D R' U R' D R U' R' D' R2 U D'","R U' R D' R' U R D R2","U' D R' D R U R' D' R D'","D2 R' F2 R D' R' D F2 D' R D'","F R B2 R' F' R B2 R'","U D' R D R' U2 R D' R' U D","U R2 D2 R U' R' D2 R U R U'","R' D R' U R D2 R' U' R D R","D' R D R' U' R D' R' U D","R' U R U' R' D2 R U R' U' D2 R","U' R' U R D' R' U2 R D R' U R U","l U' D' R D R' U2 R D' R' U' D l'","U D2 R U' R' D' R U R' U' D'","D' R D R' U' R D2 R' U R D R' D","U R D2 R U' R' D2 R U R2 U'","U' D' R' U' R D R' U R U","U' R' U' L U R U' L' U2","U' D' R2 D R U R' D' R U' R U D","U D2 R U' R' D2 R U R' U'","U R' D2 R U' R' D R U R' D R U'","U2 R D' R' U R D R' U","l' U2 R' D R U2 R' D' R l","R' U' R2 D' R' U' R D R' U R' U R","U R D' R' U2 R D R' U","R U D' R D R' U' R D' R' D R'","U2 R2 D' R' U R D R' U' R' U2","R D' R' U' R D R' U","U' L U R U' L' U R'","U R2 D' R' U2 R D R' U2 R' U'","D R U' R2 D R U2 R' D' R U2 R U R' D'","R' D F' D' R D R' F R D'","D2 R U R' D' R U' R' D'","R D' R2 D R U R' D' R U' R D R'","R' U R2 D' R' U' R D R' U R' U' R","D2 R U R' D R U' R' D","D2 R2 D' R' U' R D R' U R' D2","U R U' R D' R' U' R D R' U2 R' U'","D2 R U R' D2 R U' R'","R D' R' U' R' D R U R' D' R2 D R'","D R U2 R D' R' U2 R D R2 D'","R U' R2 U R D R' U' R D' R U R'","R D' R' U2 R' D R U2 R' D' R2 D R'","D R U R D' R' U' R D R2 D'","U R2 U' R' D' R U R' D R' U'","R2 D R2 D' R2 U' R2 D R2 D' R2 U","D R U' D' R' U R D R' U' R U R' D'","F' R D R' U2 R D' R' U2 F","R U' R2 U R D2 R' U' R D2 R U R'","U R2 U' R' D R U R' D' R' U'","D R U' R D' R' U R D R2 D'","R U' R2 U R D' R' U' R D R U R'","U R2 U' R' D2 R U R' D2 R' U'","R D' R' U R' D R U' R' D' R2 D R'","F' R U R' D' R U2 R' D R U R' F","U R D' R' D R U' R' D' R U D R' U'","D' R U' R' U2 R' D R U2 R' D' R2 U R' D","U2 R D R' U R D' R' U","R U' D' R' D R U2 R' D' R U' D R'","R' U R' D' R U2 R' D R U R","U R D R' U2 R D' R' U","U' R D' R U' R' D R U R2 U","R' U R' D' R U R' D R U2 R","R D R' U' R D' R' U","U' R U R' U' R D R' U R U' D' R' U","U R U R' D' R U2 R' D R U R' U'","U' R2 D R U R' D' R U' R U","U D' R U' R' D2 R U R' U' D'","R D R' U' R D R' U R D2 R'","R2 D2 R U R' D R U' R' D R2","U' R' U' R D' R' U R U D","R' U R U' R D' R' U R D R2 U' R","R U' D' R2 D R U2 R' D' R U2 R U D R'","U D' R U' R' D R U R' U'","R D' R' D R U R' D' R U' D R'","U' D' R' D' R U R' D R D","R U' R' D' R U2 R' D R U' R'","F R U R' D' R U' R' D F'","U D R D' R' U2 R D R' U D'","R U2 R' D' R U' R' D R U' R'","D' R' D R' U R D' R' U' R2 D","U D' R' D' R U' R' D R D","R U' D R' U R D' R' U' R U R'","U D R2 D' R' U2 R D R' U2 R' U' D'","D' R2 D' R' U' R D R' U R' D","R' U' D R U2 R' D' R U2 R' U R","D' R U R' D2 R U' R' D'","R U' D R' U R D2 R' U' R U D R'","U2 L U R' U' L' U R U","D' R U R' D' R U' R' D2","D' R U D R' D' R U' R' D R D' R' D","D R D' R' U' R D2 R' U R D' R' D'","D' R U R' D R U' R'","D R D' R' U' R' D R U R' D' R2 D R' D'","D' R U' D R' D' R U2 R' D R U' D' R' D","R U' R' U2 R' D' R U2 R' D R2 U R'","D R2 D' R2 U R2 D R2 D' R2 U' R2","D2 R U R D' R' U' R D R2 D2","U' D' R' U' R' D R U R' D' R2 U D","U R' D R U' R D' R' U' R D R' U R' D' R","U R' U' D' R U R' D R U' R' U R U'","U' D' R' U2 R' D R U2 R' D' R2 U D","U' R' F' D' R U' R' D R U R' F R U","U' R' D R U' R D' R' U R D R2 D' R U","R U' R' U2 R' D R U2 R' D' R2 U R'","R U' R' U R D' R' U2 R D R' U R U R'","U' D' R' U R' D R U' R' D' R2 U D","D2 R U' R D' R' U R D R2 D2","F' R U' R' D' R U2 R' D R U' R' F","R U' D' R' U2 R' D R U2 R' D' R2 U D R'","D' R D R' D' R U R' D R U' D' R' D","U' D' R' D R U R' D' R D","R' F2 R D' R' D F2 D' R D","F R U R' D R U' R' D' F'","U2 D' R' D R U2 R' D' R D","R U R' U' R' D' R U R' D R2 U' R'","D R' U R' D' R U R' D R U2 R D'","U D' R' D R U' R' D' R D","D' R' U R U' R' D R U R' U' D' R D","U' R' U R D R' U2 R D' R' U R U","U R U' F2 U R' U' R F2 R'","U R U' R' D R U R' U' D'","R' F' R D' R' D F D' R D","U' D R2 D R U R' D' R U' R U D'","U R U' R' D2 R U R' U' D2","U R U2 R D' R' U R D R' U R' U'","U R U' D' R' D R U R' D' R D R' U'","U R U' R' D' R U R' U' D","D R D R' U' R D2 R' U R D R' D'","U' R' D' R U R' D R","D' R U' R' D R U2 R' D' R U' R' D","R' U' R U R' D' R U' R' U D R","U2 R' D' R U2 R' D R","U R' U' R D R' U' R D' R' U2 R U'","R' D R' U R D' R' U' R2","U R' D' R U' R' D R","R' U R U' R' D' R U R' U' D R","U' R' U D R D' R' U2 R D R' U D' R U","R U D R' D' R U' R' D R D' R'","U R' D' R U' R' D2 R U R' D' R U'","R U R' D R U' R' D'","R2 D' R' U' R D R' U R'","U R' D' R U' R' D' R U R' D2 R U'","R U R' D2 R U' R' D2","D' R U' R2 D R U2 R' D' R U2 R U R' D","R U D' R' D R U' R' D' R D R'","R U R' D' R U' R' D"]
const enms=["BA","BM","BC","BI","BE","BK","BF","BR","BG","BO","BH","BT","BL","BS","BJ","BZ","BP","BD","BN","BU","WA","WM","WC","WI","WE","WK","WF","WR","WG","WO","WH","WT","WL","WS","WJ","WZ","WP","WD","WN","WU","AB","AW","AC","AI","AE","AK","AF","AR","AG","AO","AH","AT","AL","AS","AJ","AZ","AP","AD","AN","AU","MB","MW","MC","MI","ME","MK","MF","MR","MG","MO","MH","MT","ML","MS","MJ","MZ","MP","MD","MN","MU","CB","CW","CA","CM","CE","CK","CF","CR","CG","CO","CH","CT","CL","CS","CJ","CZ","CP","CD","CN","CU","IB","IW","IA","IM","IE","IK","IF","IR","IG","IO","IH","IT","IL","IS","IJ","IZ","IP","ID","IN","IU","EB","EW","EA","EM","EC","EI","EF","ER","EG","EO","EH","ET","EL","ES","EJ","EZ","EP","ED","EN","EU","KB","KW","KA","KM","KC","KI","KF","KR","KG","KO","KH","KT","KL","KS","KJ","KZ","KP","KD","KN","KU","FB","FW","FA","FM","FC","FI","FE","FK","FG","FO","FH","FT","FL","FS","FJ","FZ","FP","FD","FN","FU","RB","RW","RA","RM","RC","RI","RE","RK","RG","RO","RH","RT","RL","RS","RJ","RZ","RP","RD","RN","RU","GB","GW","GA","GM","GC","GI","GE","GK","GF","GR","GH","GT","GL","GS","GJ","GZ","GP","GD","GN","GU","OB","OW","OA","OM","OC","OI","OE","OK","OF","OR","OH","OT","OL","OS","OJ","OZ","OP","OD","ON","OU","HB","HW","HA","HM","HC","HI","HE","HK","HF","HR","HG","HO","HL","HS","HJ","HZ","HP","HD","HN","HU","TB","TW","TA","TM","TC","TI","TE","TK","TF","TR","TG","TO","TL","TS","TJ","TZ","TP","TD","TN","TU","LB","LW","LA","LM","LC","LI","LE","LK","LF","LR","LG","LO","LH","LT","LJ","LZ","LP","LD","LN","LU","SB","SW","SA","SM","SC","SI","SE","SK","SF","SR","SG","SO","SH","ST","SJ","SZ","SP","SD","SN","SU","JB","JW","JA","JM","JC","JI","JE","JK","JF","JR","JG","JO","JH","JT","JL","JS","JP","JD","JN","JU","ZB","ZW","ZA","ZM","ZC","ZI","ZE","ZK","ZF","ZR","ZG","ZO","ZH","ZT","ZL","ZS","ZP","ZD","ZN","ZU","PB","PW","PA","PM","PC","PI","PE","PK","PF","PR","PG","PO","PH","PT","PL","PS","PJ","PZ","PN","PU","DB","DW","DA","DM","DC","DI","DE","DK","DF","DR","DG","DO","DH","DT","DL","DS","DJ","DZ","DN","DU","NB","NW","NA","NM","NC","NI","NE","NK","NF","NR","NG","NO","NH","NT","NL","NS","NJ","NZ","NP","ND","UB","UW","UA","UM","UC","UI","UE","UK","UF","UR","UG","UO","UH","UT","UL","US","UJ","UZ","UP","UD"]
const ealgs=["L2 U L2 S' L2 S U' L2","Lw U L' U' M' U L U' L'","R2 U R U R' U' R' U' R' U R'","S R' F R S' R' F' R","R' F' R S R' F2 R S' R' F' R","Lw' U L U' M U L' U' L","L U' L S' L2 S L U L'","U L E L' U' L E' L'","M2 L' U L U' M2 U L' U' L","U' M U' M' U' M U' M'","U R U R' U' R' U' R' U R","U' R' E' R U' R' E R U2","R' U R U R' U' R' U' R' U R2","U L E' L' U' L E L'","U' R E2 R' U' R E2 R' U2","U' R' E R U' R' E' R U2","Uw' R' E R U' R' E' R U Uw","U' R E' R' U' R E R' U2","R U R U R' U' R' U' R' U","U R' S' R U' R' S R","S' U L2 S' L2 S U' S","U' S R' F R S' R' F' R U","L F' L' S' L F L' S","M U M' U2 M U M'","L' F' L2 E' L2 E F L","x M' U' L U M U' L' U x'","L F' L' S L F L' S'","F L' E' L2 E L' F'","D' R2 U' Rw U R' U' M U R U' R' U R2 D","M' U M' U M U M' U M2","L F' L S L' F L S' L2","R' F R S R2 S' R F' R","S' U L' E' L2 E L' U' S","R M U M' U2 M U R' M'","Rw U Rw' E Rw U Rw' E' Rw U2 Rw'","S U' R' E R U R' E' R S'","L' Uw L' E L2 E' L' Uw' L","S U' R E' R' U R E R' S'","M' U' L' E L U L' E' Lw","Rw' U M' U2 M U Rw","L2 U S' L2 S L2 U' L2","S' U S' L2 S L2 U' S","R2 U' S R2 S' R2 U R2","S U' S R2 S' R2 U S'","U2 M' U2 M","R' F' R U R' E R U' R' E' F R","U S' L2 S L2 U'","U L E L' U2 L E' L' U","M U2 M' U2","U M' U M' U2 M U M U'","U' S R2 S' R2 U","U' R' E' R U2 R' E R U'","R' U' S R2 S' R2 U R","U L E' L' U2 L E L' U","L U S' L2 S L2 U' L'","U' R' E R U2 R' E' R U'","U' R' E2 R U2 R' E2 R U'","U' R E' R' U2 R E R' U'","R U' S R2 S' R2 U R'","U L' E L U2 L' E' L U","L U L' U' M U L U' Lw'","U' R' F R S R' F' R S' U","R' U' R U M U' R' U Rw","Rw U R' U' M U R U' R'","U S R' F' R S' R' F R U'","U' R' F' R S R' F R S' U","U L2 U' M U L2 U' M'","M' U' L2 U M U' L2 U","U S R B R' S' R B' R' U'","U' R B R' S R B' R' S' U","U' R2 U M U' R2 U M'","M' U R2 U' M U R2 U'","U' R U M U' R' U M'","M' U R U' M U R' U'","U L' U' M U L U' M'","M' U' L' U M U' L U","U L U' M U L' U' M'","M' U' L U M U' L' U","U' R' U M U' R U M'","M' U R' U' M U R U'","M2 U M U2 M' U M2","S' L F' L' S L F L'","R2 U' R2 S R2 S' U R2","Rw' U' R U M' U' R' U R","L F L' S' L F2 L' S L F L'","Rw U' R' U M U' R U R'","U' L' U' L U L U L U' L'","U L E L' U L E' L' U2","Rw M' U' R' U M2 U' R U R'","U M U M' U M U M'","R' U R' S R2 S' R' U' R","U' R' E' R U R' E R","U' E' R' E R U R' E' R E","U L E' L' U L E L' U2","U' R E2 R' U R E2 R'","U' R' E R U R' E' R","U' R' E2 R U R' E2 R","U' R E' R' U R E R'","R U R U R U' R' U' R' U'","U R' S' R U R' S R U2","R' F R S R' F' R S'","M U' M' U2 M U' M'","S U' R2 S R2 S' U S'","R U R' U' M' U R U' Rw'","R F R2 E R2 E' F' R'","R' F' R U' R' E R U R' E' F R","R' F R' S' R F' R' S R2","L F' L' S' L2 S L' F L'","R M U R' U' M2 U R U' Rw'","M' U' M' U' M U' M' U' M2","R' F R S' R' F' R S","F' R E R2 E' R F","Lw F2 Lw' S' Lw F' Lw' S Lw F' Lw'","S' U L E' L' U' L E L' S","S U' R E R2 E' R U S'","M L' U' M' U2 M U' M' L","M' U R E' R' U' R E Rw'","Lw U' M' U2 M U' Lw'","R Uw' R E' R2 E R Uw R'","S' U L' E L U' L' E' L S","R' F R S R' F2 R S' R' F R","M Uw M' Uw2 M' Uw M'","M' U2 M U2","U R' F' R S R' F R S' U'","L F' L' S' L F2 L' S L F' L'","M Uw' M' Uw2 M' Uw' M'","L F' L' S L F2 L' S' L F' L'","L F' E' L2 E L2 F L'","Uw2 M' Uw2 M'","D' S' R F R' S R F' R' D","R' F R S' R' F2 R S R' F R","R' F E R2 E' R2 F' R","U R U' M' U2 M U' R' U'","R2 F E R2 E' R2 F' R2","U' L' U M' U2 M U L U","L2 F' E' L2 E L2 F L2","U' L U M' U2 M U L' U","F' E' L2 E L2 F","U R' U' M' U2 M U' R U'","F E R2 E' R2 F'","L' U L U' M' U L' U' Lw","F' L F M' F' L' F M","R' F' E R U R' E' R U' R' F R","U' S R' F' R S' R' F R U","R U' R' U M' U' R U Rw'","R' F' E R U' R' E' R U R' F R","U L2 U' M' U L2 U' M","U S L F L' S' L F' L' U'","D R F R' S' R F' R' S D'","U M' U' M U2 M U M' U","U' R2 U M' U' R2 U M","U' S' R' F' R S R' F R U","U' R U M' U' R' U M","M D R' D' M' D R D'","U L' U' M' U L U' M","F E' L' U L E L' U' L F'","U L U' M' U L' U' M","M' U' L U M' U' L' U M2","U' R' U M' U' R U M","M' U R' U' M' U R U' M2","L U' L' S' L2 S L' U L'","S L F' L' S' L F L'","U L2 S' L2 S U'","M U L2 U' M' U L2 U'","L U L' U' L' U' L' U L U","R2 S' R F R' S R F' R","L F L' S L F2 L' S' L F L'","M' U L2 U' M U L2 U'","M2 U L2 U' M2 U L2 U'","D L F' E' L2 E L2 F L' D'","U' R2 S' R2 S U","S' R F R' S R F' R'","U L' E' L2 E L' U'","U E L E L2 E' L U' E'","U2 L' U L U L U L' U' L' U","U E L' E' L2 E L' U' E'","L U' L' U' L' U' L U L U","Uw L E L2 E' L Uw'","U L E L2 E' L U'","Uw L' E' L2 E L' Uw'","L E L' U L E' L' U'","F L E' L2 E L F'","U' L E L' U2 L E' L' U'","U' L2 U M' U' L2 U M","U2 L E L' U' L E' L' U'","L F' L S' L2 S L F L'","L F E' L2 E L2 F' L'","U L F L' S L F' L' S' U'","U S' L B' L' S L B L' U'","U S' R' D R S R' D' R U'","L' F' L S L' F L S'","R' F R' S' R2 S R' F' R","R U2 R' S R U' R' S' R U' R'","M' U' L' E' L2 E L' U M","S' U' R E R2 E' R U S","U S' U' L U S U' L'","S' U' R' E' R2 E R' U S","U S' U' L' U S U' L","L E L' U L E L' U' L E2 L'","F R' S' R2 S R' F'","L U L' U' M2 U L U' M2 L'","Lw' U' L U M2 U' L' U M' L","U2 M U2 M'","U R B R' S R B' R' S' U'","R' U' R U M2 U' R' U Rw M'","Rw U R' U' M2 U R U' R' M'","M' U2 M' U2 M2","D S' R F R' S R F' R' D'","U L2 U' M2 U L2 U' M2","U L B' L' S' L B L' S U'","U' R2 U M2 U' R2 U M2","U' R' B R S R' B' R S' U","U' R U M2 U' R' U M2","M' U R U' M2 U R' U' M'","U L' U' M2 U L U' M2","M' U' L' U M2 U' L U M'","U L U' M2 U L' U' M2","M' U' L U M2 U' L' U M'","U' R' U M2 U' R U M2","M' U R' U' M2 U R U' M'","M U M' U M U M' U","M2 U' M U' M' U' M U' M","U M' U' M' U2 M U' M U'","U' S R B R' S' R B' R' U","M U' M' U' M U' M' U'","M2 U M U M' U M U M","D' R F R' S' R F' R' S D","U M U M' U2 M' U' M U","D L F E' L2 E L2 F' L' D'","U S L' B' L S' L' B L U'","D' R' F' E R2 E' R2 F R D","U' S' R B R' S R B' R' U","U' R U' M U R' U' M' U2","U Lw E' L' U' L E L' U M' U'","U L' U M U' L U M' U2","U' Rw' E R U R' E' R U' M' U","U L U M U' L' U M' U2","U' R E' Rw' U Rw E Rw' U' M' U","U' R' U' M U R U' M' U2","U L' E Lw U' Lw' E' Lw U M' U'","R' U' R U R U R U' R' U'","L2 S L' F' L S' L' F L'","U' R2 S R2 S' U","M U' R2 U M' U' R2 U","R' U R S R2 S' R U' R","S' R' F R S R' F' R","R' F' R S' R' F2 R S R' F' R","M' U' R2 U M U' R2 U","U' S' R2 S R2 U","S L' F' L S' L' F L","M2 U' R2 U M2 U' R2 U","D' R' F E R2 E' R2 F' R D","U2 R U' R' U' R' U' R U R U'","U' E' R E R2 E' R U E","U' R E R2 E' R U","U' E' R' E' R2 E R' U E","U' R' E' R2 E R' U","Uw' R E R2 E' R Uw","R' U R U R U R' U' R' U'","Uw' R' E' R2 E R' Uw","U2 R' E' R U R' E R U","R' F R' S R2 S' R' F' R","U R' E' R U2 R' E R U","R U R U' M' U R' U' Rw'","R' E' R U' R' E R U","F' R' E R2 E' R' F","R' F' E R2 E' R2 F R","U' R' F' R S' R' F R S U","R F R' S' R F' R' S","R' F R S' R2 S R F' R","U' S R' B R S' R' B' R U","U' R B R' S' R B' R' S U","R' Fw R S' R2 S R Fw' R","U' S U R' U' S' U R","R E R' U' R E R' U R E2 R'","M' U R E R2 E' R U' M","R' E' R U' R' E' R U R' E2 R","R' F E' R2 E R2 F' R","U' D' R' U M' U' R U M D","U' S U R U' S' U R'","R2 U' R U R U R U' R' U' R","S' U L E' L2 E L U' S","R' U S R2 S' R2 U' R","M U' R U M' U' R' U","E' R' E R U' R' E' R U E","Lw F Lw' S' Lw F Lw' S Lw F2 Lw'","U R U M' U2 M U R' U'","M' U' R U M U' R' U","U L E' L2 E L U'","U S R U2 R' S' R U2 R' U'","M2 U' R U M2 U' R' U","U2 M U R U' M' U R' U","U R' U' R' U R U R U R' U2","R' Fw R' S' R2 S R' Fw' R","R' U' R E R2 E' R U R","R U' R' E R U R' E'","R' U' R' E' R2 E R' U R","R U' R E' R' U R E R2","U R' S R2 S' R' U'","R U' R' E' R U R' E","L E' L' U L E L' U'","R M U' M' U2 M U' R' M'","U' L E' L' U2 L E L' U'","U R U' M' U R' U' M","U2 L E' L' U' L E L' U'","S' L E' L' U L E L' U' S","R2 F' E R2 E' R2 F R2","F' R U' R' E R U R' E' F","U E L' E L2 E' L' U' E'","M' U' L E' L2 E L U M","M U R U' M2 U R' U' M","U M U' L E' L' U L E Lw' U'","U' E' R' E R2 E' R' U E","R' U' S U R U' S' U","E' L' U L E L' U' L","U' E' L S' L2 S L U E","L2 E' L' U L E L' U' L'","Rw U Rw' E2 Rw U' Rw' E2","E R' U' R E' R' U R","Lw' U' R' S R2 S' R' U Lw","U2 R E2 R' U R E2 R' U","Rw U2 Rw' E Rw U' Rw' E' Rw U' Rw'","U R E2 R' U2 R E2 R' U","M U L' U' M' U L U'","R E2 R' U' R E2 R' U","S U' R' E R2 E' R' U S'","U' L' U' M' U2 M U' L U","M' U L' U' M U L U'","U' L U L U' L' U' L' U' L U2","S' U' R' E R2 E' R' U S","M2 U L' U' M2 U L U'","U2 M U' L' U M' U' L U'","U' R' E R2 E' R' U","R E2 R' U' R E' R' U R E' R'","R' U' R' E R2 E' R' U R","L' U L E' L' U' L E","U' L S' L2 S L U","L' U L E L' U' L E'","R U' R' E R2 E' R' U R'","L' U L' E L U' L' E' L2","U2 R' E R U R' E' R U","S R' E R U' R' E' R U S'","U R' E R U2 R' E' R U","U' L' U M' U' L U M","R' E R U' R' E' R U","M L' U M' U2 M U M' L","L2 F E' L2 E L2 F' L2","F L' U L E' L' U' L E F'","U E L E' L2 E L U' E'","L U S' U' L' U S U'","M U' L' U M2 U' L U M","U' M U R' E R U' R' E' Rw U","U' E' R E' R2 E R U E","M' U R' E R2 E' R' U' M","E R U' R' E' R U R'","U E R' S R2 S' R' U' E'","E' L U L' E L U' L'","Rw U L S' L2 S L U' Rw'","R2 E R U' R' E' R U R","Rw U R' E R2 E' R' U' Rw'","U' Uw' R' E R U R' E' R Uw","L' Uw L E L2 E' L Uw' L","U R' E2 R U2 R' E2 R U","M U L U' M' U L' U'","R' E2 R U' R' E2 R U","S U' R E' R2 E R U S'","U' L U' M' U2 M U' L' U","M' U L U' M U L' U'","U' L' U' L' U L U L U L'","S' U' R E' R2 E R U S","M2 U L U' M2 U L' U'","U2 M U' L U M' U' L' U'","U' R E' R2 E R U","R' E2 R U' R' E R U R' E R","E2 R U' R' E2 R U R'","L U L E' L' U' L E L2","U' L' S' L2 S L' U","L U L' E' L U' L' E","R U' R E' R2 E R U R'","L U L' E L U' L' E'","U2 R E' R' U R E R' U","S R E' R' U' R E R' U S'","U R E' R' U2 R E R' U","U' L U M' U' L' U M","R E' R' U' R E R' U","Lw U M' U2 M U Lw'","F E' L2 E L2 F'","M2 U' L U M U' L' U M","Uw L' E L2 E' L' Uw'","L' U S' U' L U S U'","M U' L U M2 U' L' U M","U' M U Rw E' Rw' U' Rw E R' U","Uw' R' E R2 E' R' Uw","R' F R2 E' R2 E F' R","R2 E' R' U' R E R' U R'","E2 Rw U Rw' E2 Rw U' Rw'","E L' U L E' L' U' L","Rw U L' S' L2 S L' U' Rw'","E' R' U' R E R' U R","Uw' L S' L2 S L Uw","U' R U R U R U' R' U' R'","Lw' E L U' L' E' L U M","R U' R2 S R2 S' U R'","M U' R' U M' U' R U","U R U R U R' U' R' U' R'","R Uw' R' E' R2 E R' Uw R'","U R' U M' U2 M U R U'","M' U' R' U M U' R U","U L' E L2 E' L' U'","L E2 L' U L E' L' U' L E' L'","M2 U' R' U M2 U' R U","U2 M U R' U' M' U R U","U R U R U' R' U' R' U' R","D' M' U' R' U M U' R U D","U R S R2 S' R U'","R' U' R E R' U R E'","R U' R E R2 E' R U R'","R' U' R' E R U R' E' R2","R U' R' E' R2 E R' U R'","R' U' R E' R' U R E","R' S' R U R' S R U'","Rw' U' M' U2 M U' Rw","U' L' E L U2 L' E' L U'","U R' U' M' U R U' M","U2 R' S' R U' R' S R U'","S' R' S' R U R' S R U' S","F' E R2 E' R2 F","M2 U R' U' M U R U' M","Uw L E' L2 E L Uw'","F R S' R2 S R F'","M U R' U' M2 U R U' M","U M U' Lw' E Lw U Lw' E' L U'","Uw' R E' R2 E R Uw","R U' S U R' U' S' U","E' R U' R' E R U R'","Lw' U' R S R2 S' R U Lw","L2 E L U L' E' L U' L","Rw U R E R2 E' R U' Rw'","E L U L' E' L U' L'","Uw R' S R2 S' R' Uw'"]
const eUBnms=["BC","BI","BE","BK","BF","BR","BG","BO","BH","BT","BL","BS","BJ","BZ","BP","BD","BN","BU","WC","WI","WE","WK","WF","WR","WG","WO","WH","WT","WL","WS","WJ","WZ","WP","WD","WN","WU","CB","CW","CE","CK","CF","CR","CG","CO","CH","CT","CL","CS","CJ","CZ","CP","CD","CN","CU","IB","IW","IE","IK","IF","IR","IG","IO","IH","IT","IL","IS","IJ","IZ","IP","ID","IN","IU","EB","EW","EC","EI","EF","ER","EG","EO","EH","ET","EL","ES","EJ","EZ","EP","ED","EN","EU","KB","KW","KC","KI","KF","KR","KG","KO","KH","KT","KL","KS","KJ","KZ","KP","KD","KN","KU","FB","FW","FC","FI","FE","FK","FG","FO","FH","FT","FL","FS","FJ","FZ","FP","FD","FN","FU","RB","RW","RC","RI","RE","RK","RG","RO","RH","RT","RL","RS","RJ","RZ","RP","RD","RN","RU","GB","GW","GC","GI","GE","GK","GF","GR","GH","GT","GL","GS","GJ","GZ","GP","GD","GN","GU","OB","OW","OC","OI","OE","OK","OF","OR","OH","OT","OL","OS","OJ","OZ","OP","OD","ON","OU","HB","HW","HC","HI","HE","HK","HF","HR","HG","HO","HL","HS","HJ","HZ","HP","HD","HN","HU","TB","TW","TC","TI","TE","TK","TF","TR","TG","TO","TL","TS","TJ","TZ","TP","TD","TN","TU","LB","LW","LC","LI","LE","LK","LF","LR","LG","LO","LH","LT","LJ","LZ","LP","LD","LN","LU","SB","SW","SC","SI","SE","SK","SF","SR","SG","SO","SH","ST","SJ","SZ","SP","SD","SN","SU","JB","JW","JC","JI","JE","JK","JF","JR","JG","JO","JH","JT","JL","JS","JP","JD","JN","JU","ZB","ZW","ZC","ZI","ZE","ZK","ZF","ZR","ZG","ZO","ZH","ZT","ZL","ZS","ZP","ZD","ZN","ZU","PB","PW","PC","PI","PE","PK","PF","PR","PG","PO","PH","PT","PL","PS","PJ","PZ","PN","PU","DB","DW","DC","DI","DE","DK","DF","DR","DG","DO","DH","DT","DL","DS","DJ","DZ","DN","DU","NB","NW","NC","NI","NE","NK","NF","NR","NG","NO","NH","NT","NL","NS","NJ","NZ","NP","ND","UB","UW","UC","UI","UE","UK","UF","UR","UG","UO","UH","UT","UL","US","UJ","UZ","UP","UD"]
const eUBalgs=["R2 U' R' U' R U R U R U' R","l F' l' S' l F l' S","M2 L' U' L U M2 U' L' U L","U M' U M U M' U M","L U L S' L2 S L U' L'","U' L E L' U L E' L'","l U R' E R U2 R' E' R U l'","M L' U' L U M' U' L' U L","U' R' U' R U R U R U' R'","U R' E' R U R' E R U2","U' L' E2 L U L' E2 L","U' L E' L' U L E L'","u' L E' L' U L E L' E'","U R' E R U R' E' R U2","U R' E2 R U R' E2 R U2","U R E' R' U R E R' U2","U' L E2 L' U L E2 L'","U' L' E L U L' E' L","S r' F r S' r' F' r","M' U' M U2 M' U' M","l' U L U' M2 U L' U' M' L","U R M U' R' U M2 U' R U r' U'","r' U r S r' U' r S'","l U' L S' L2 S L U l'","L B' E L2 E' L2 B L'","M2 L U L' U' M' U L U' l'","r' U L' E L U' L' E' r L","l U' R' E R2 E' R' U l'","S' U' L' E' L2 E L' U S","r U' M U2 M' U' r'","L u' L E' L2 E L u L'","S U R' E R U' R' E' R S'","r' U' r E' r' U' r E r' U2 r","S U R E' R' U' R E R' S'","S' U' L E L2 E' L U S","R' M' U' M U2 M' U' R M","R' U R' U' R' U' R' U R U R2","r' F r S r' F' r S'","r M' U R' U' M2 U R U' R'","U' M' U' M U' M' U' M","U L U L' U' L' U' L' U L","U' L E L' U' L E' L' U2","r' U' L E' L' U2 L E L' U' r","r' U R U' M' U R' U' R","R' U' R' S R2 S' R' U R","U R' E' R U' R' E R","u R' E R U' R' E' R E","U' L E' L' U' L E L' U2","U R E2 R' U' R E2 R'","U R' E R U' R' E' R","U R' E2 R U' R' E2 R","U R E' R' U' R E R'","U' L E2 L' U' L E2 L' U2","U' L' E L U' L' E' L U2","S' R U' R' S R U R'","M' U M U2 M' U M","r U' R' U M2 U' R U R' M'","U D S' R' F R S R' F' R U' D'","l U' R E' R' U R E R' l'","r' U L E' L2 E L U' r","R' B' R2 E' R2 E B R","r' M U' R U M' U' R' U r","l U' l' S' l U l' S","U S' R' F R S R' F' R U'","R' u R' E R2 E' R' u' R","S' U' L E' L' U L E L' S","S U R E R2 E' R U' S'","l' U M U2 M' U l","S U R' E' R2 E R' U' S'","M' L U M U2 M' U M L'","l U l' E l U l' E' l U2 l'","S' U' L' E L U L' E' L S","L' U' L U M2 U' L' U M2 L","M L' U L U' M2 U L' U' l","R U R' U' M2 U R U' r' M","R M U' R' U M2 U' R U r'","U' L2 U M2 U' L2 U M2","U' L' F L S' L' F' L S U","M' u2 M' u2","D' S' R' B' R S R' B R D","U R2 U' M2 U R2 U' M2","U R F' R' S R F R' S' U'","U R U' M2 U R' U' M2","M U' R U M2 U' R' U M","U' L' U M2 U' L U M2","M U L' U' M2 U L U' M","U' L U M2 U' L' U M2","M U L U' M2 U L' U' M","U R' U' M2 U R U' M2","M U' R' U M2 U' R U M","M' U' M U' M' U' M U'","M2 U M' U M U M' U M'","M' U M U M' U M U","U D R' F R S' R' F' R S U' D'","U L F L S' L2 S L F' L' U'","U' S L F L' S' L F' L' U","D R' B' R S' R' B R S D'","U M' U M U2 M U' M' U","U' R' F' R' S R2 S' R' F R U","U S' R' F' R S R' F R U'","U R U M' U' R' U M U2","U' L E' l' U l E l' U' M U","U' L' U' M' U L U' M U2","U R' E r U' r' E' r U M U'","U' L U' M' U L' U' M U2","U r E' R' U' R E R' U M U'","U R' U M' U' R U M U2","U' l' E L U L' E' L U' M U","L' U L S' L2 S L U' L","S r' U r S' r' U' r","L' U' L U L U L U' L' U'","R l E' R' U' R E R' U l'","M2 U' L2 U M2 U' L2 U","U2 M' U L2 U' M U L2 U","l U R E' R' U2 R E R' U l'","M U' L2 U M' U' L2 U","U R2 S' R2 S U'","S' R' B' R S R' B R","U' L' E' L2 E L' U","u' L E L2 E' L u","L' U L U L U L' U' L' U'","u' L' E' L2 E L' u","U2 L U' L' U' L' U' L U L U'","U' E' L E L2 E' L U E","U' L E L2 E' L U","U' E' L' E' L2 E L' U E","L E L' U' L E' L' U","U' L F' L' S L F L' S' U","U2 L E L' U L E' L' U","r' U L' E' L2 E L' U' r","U' S' L' F L S L' F' L U","U' L F L' S L F' L' S' U","M U L2 S' L2 S U' M'","U' S' R' D R S R' D' R U","r D r' S r D' r' S'","l U' R E' R2 E R U l'","L' E' L U' L' E' L U L' E2 L","M U L' E' L2 E L' U' M'","S' U R E R2 E' R U' S","U' S' U L U' S U L'","S' U R' E' R2 E R' U' S","U' S' U L' U' S U L","L E L' U' L E L' U L E2 L'","M U L E L2 E' L U' M'","l U' R' E R U2 R' E' R U' l'","L B' L2 E L2 E' B L'","r' U L E' L' U2 L E L' U r","R' B R2 E' R2 E B' R","M2 U2 M' U2 M'","D S' R' B' R S R' B R D'","r' U L' E' L U2 L' E L U r","M U S' L2 S L2 U' M'","l U' R' E' R U2 R' E R U' l'","M U' S R2 S' R2 U M'","U' R U M U2 M' U R' U","r' U' S R2 S' R2 U r","U D' R E R2 E' R U' D","l U S' L2 S L2 U' l'","U D' R' E' R2 E R' U' D","r2 F' L2 E' L2 E F r2","U' R' U M U2 M' U R U","R2 B' E' R2 E R2 B R2","L U' L' U M U' L U l'","l U L' U' M U L U' M2 L'","R' U R U' M U R' U' r","r' U' R U M U' R' U r M'","D' R' B' R S' R' B R S D","U M U' M' U2 M' U M U","U' L2 U M U' L2 U M'","U' R' D R S' R' D' R S U","U R2 U' M U R2 U' M'","U S' R B R' S R B' R' U'","U R U' M U R' U' M'","M U' R U M U' R' U M2","U' L' U M U' L U M'","M U L' U' M U L U' M2","U' L U M U' L' U M'","M U L U' M U L' U' M2","U R' U' M U R U' M'","M U' R' U M U' R U M2","R U R' U' R' U' R' U R U","r' L' E L U L' E' L U' r","R' U' R S R2 S' R U R","S' R B' R' S R B R'","M2 U R2 U' M2 U R2 U'","U' R' F' R S R2 S' R F R U","U S' R2 S R2 U'","S r D r' S' r D' r'","l U R' E' R U2 R' E R U l'","M U R2 U' M' U R2 U'","R U' R' U' R' U' R U R U","u R E R2 E' R u'","U R E R2 E' R U'","u R' E' R2 E R' u'","U R' E' R2 E R' U'","U E R E R2 E' R U' E'","U2 R' U R U R U R' U' R' U","U E R' E' R2 E R' U' E'","U2 R' E' R U' R' E R U'","l U' R E R2 E' R U l'","R' E' R U R' E R U'","r' U R S R2 S' R U' r","U S R F' R' S' R F R' U'","U R' F' R S' R' F R S U'","R' B' R S' R' B R S","l U' R' E' R2 E R' U l'","M U' R2 S R2 S' U M'","U R B R' S' R B' R' S U'","S U' L' E' L2 E L' U S'","U S U' R' U S' U' R","R E R' U R E R' U' R E2 R'","M U' R E R2 E' R U M'","R' E' R U R' E' R U' R' E2 R","M U' R' E' R2 E R' U M'","S U' L E L2 E' L U S'","U S U' R U S' U' R'","L' E2 L U' L' E2 L U","S' U' L E' L2 E L U S","E' R' E R U R' E' R u'","R' u R E R2 E' R u' R","M2 U R U' M2 U R' U'","U2 M' U' R U M U' R' U'","U' L E' L2 E L U","L' E2 L U' L' E L U L' E L","U' R U' M U2 M' U' R' U","M U R U' M' U R' U'","U' R' U' R' U R U R U R'","S U' L E' L2 E L U S'","R' U R E R2 E' R U' R","R U R' E R U' R' E'","R U R' E2 R U' R' E2","R U R E' R' U' R E R2","U' R' S R2 S' R' U","R U R' E' R U' R' E","L E' L' U' L E L' U","r U M U2 M' U r'","U2 L E' L' U L E L' U","S' L E' L' U' L E L' U S","M' U' R U M2 U' R' U M'","U' M' U l E' l' U' l E L' U","u' L' E L2 E' L' u","M U L E' L2 E L U' M'","r' U' R2 S R2 S' U r","U' M U' L E' L' U L E l' U","u R' E R2 E' R' u'","R' U S U' R U S' U'","E' L' U' L E L' U L","u' R S R2 S' R u","L2 E' L' U' L E L' U L'","r' U' R' E' R2 E R' U r","E R' U R E' R' U' R","l U R' S R2 S' R' U' l'","E L E' L' U' L E L' u","L u' L' E' L2 E L' u L'","R E2 R' U R E2 R' U'","r' E R U' R' E' R U M'","M2 U' L' U M2 U' L U","U2 M' U L' U' M U L U","U L U L U' L' U' L' U' L","S' U R' E R2 E' R' U' S","U D' R' E R2 E' R' U' D","M U' L' U M' U' L U","U R' E R2 E' R' U'","R E2 R' U R E' R' U' R E' R'","R' U R' E R2 E' R' U' R","L' U' L E' L' U L E","U L S' L2 S L U'","L' U' L E L' U L E'","R U R' E R2 E' R' U' R'","L' U' L' E L U L' E' L2","U2 R' E R U' R' E' R U'","S R' E R U R' E' R U' S'","R' E R U R' E' R U'","l' U' M U2 M' U' l","M' U L' U' M2 U L U' M'","U M' U' r' E r U r' E' R U'","u' L E' L2 E L u","L U' S' U L' U' S U","l U L2 S' L2 S U' l'","M2 U L' U' M' U L U' M'","u R E' R2 E R u'","M U' R' E R2 E' R' U M'","E R U R' E' R U' R'","u' R' S R2 S' R' u","R' E R U R' E R U' R' E2 R","M U' L S' L2 S L U M'","R2 E R U R' E' R U' R","E2 r' U' r E2 r' U r","E' L' E L U' L' E' L U E","r' U2 r E' r' U r E r' U r","R' E2 R U R' E2 R U'","S U R E' R2 E R U' S'","M2 U' L U M2 U' L' U","U2 M' U L U' M U L' U","U L' U' L' U L U L U L' U2","S' U R E' R2 E R U' S","U L U M U2 M' U L' U'","M U' L U M' U' L' U","U R E' R2 E R U'","R' E2 R U R' E R U' R' E R","E2 R U R' E2 R U' R'","L U' L E' L' U L E L2","U L' S' L2 S L' U'","R' E2 R U R' E' R U' R' E' R","R U R E' R2 E R U' R'","L U' L' E L U L' E'","U2 R E' R' U' R E R' U'","S R E' R' U R E R' U' S'","R E' R' U R E R' U'","M' L U' M U2 M' U' M L'","M' U L U' M2 U L' U' M'","U M' U' R E' R' U R E r' U'","U' E' L' E L2 E' L' U E","L' U' S' U L U' S U","r2 F r2 E r2 E F' r2","M2 U L U' M' U L' U' M'","U E R' E R2 E' R' U' E'","M U' R E' R2 E R U M'","R2 E' R' U R E R' U' R'","r' U' R E' R2 E R U r","E L' U' L E' L' U L","r' U' L' S' L2 S L' U r","E' R' U R E R' U' R","U' E' R S R2 S' R U E","L E2 L' U' L E2 L' U","S' U' L' E L2 E' L' U S","E R E' R' U R E R' U' E'","l U2 l' E l U' l' E' l U' l'","M2 U R' U' M2 U R U'","U2 M' U' R' U M U' R U'","U' L' E L2 E' L' U","L E2 L' U' L E' L' U L E' L'","U' R' U' M U2 M' U' R U","M U R' U' M' U R U'","U' R U R U' R' U' R' U' R U2","R u R E R2 E' R u' R'","U' R S R2 S' R U","R' U R E R' U' R E'","R U R E R2 E' R U' R'","R' U R' E R U' R' E' R2","R U R' E' R2 E R' U' R'","R' U R E' R' U' R E","L' E L U' L' E' L U","R' M' U M U2 M' U R M","U2 L' E L U L' E' L U","S' L' E L U' L' E' L U S","M' U' R' U M2 U' R U M'","U' M' U L' E L U' L' E' l U","U' E' L E' L2 E L U E","S L' E L U' L' E' L U S'","R l U' R2 S R2 S' U R' l'","M2 U' R' U M' U' R U M'","U E R E' R2 E R U' E'","R U S U' R' U S' U'","E' R U R' E R U' R'","M U R S R2 S' R U' M'","L2 E L U' L' E' L U L","r' U' r E2 r' U r E2","E L U' L' E' L U L'","U' E' R' S R2 S' R' U E"]
const eUBcomms=["Not found.","[l F' l',S']","L':[M2,U' L U]","Not found.","L U L:[S',L2]","[U',L E L']","l U:[R' E R,U2]","L':[M,U' L U]","Not found.","U:[R' E' R,U]","[U',L' E2 L]","[U',L E' L']","u':[L E' L',U]","U:[R' E R,U]","U:[R' E2 R,U]","U:[R E' R',U]","[U',L E2 L']","[U',L' E L]","[S,r' F r]","M' U':[M,U2]","l':[U L U',M2]","U R M:[U' R' U,M2]","[r' U r,S]","l U' L:[S',L2]","L B':[E,L2]","l:[M,U L' U']","r':[U,L' E L]","l U' R':[E,R2]","S' U' L':[E',L2]","r U':[M,U2]","L u' L:[E',L2]","S:[U,R' E R]","r' U':[r E' r',U']","S:[U,R E' R']","S' U' L:[E,L2]","R' M' U':[M,U2]","Not found.","[r' F r,S]","R:[M2,U R' U']","Not found.","Not found.","U':[L E L',U']","r' U':[L E' L',U2]","R':[M,U R U']","R' U' R':[S,R2]","[U,R' E' R]","u:[R' E R,U']","U':[L E' L',U']","[U,R E2 R']","[U,R' E R]","[U,R' E2 R]","[U,R E' R']","U':[L E2 L',U']","U':[L' E L,U']","[S',R U' R']","M' U:[M,U2]","r:[U' R' U,M2]","U D:[S',R' F R]","l:[U',R E' R']","r' U L:[E',L2]","R' B':[R2,E']","r':[M,U' R U]","[l U' l',S']","U:[S',R' F R]","R' u R':[E,R2]","S':[U',L E' L']","S U R:[E,R2]","l' U:[M,U2]","S U R':[E',R2]","M' L U:[M,U2]","l U:[l' E l,U]","S':[U',L' E L]","L':[U' L U,M2]","M L':[U L U',M2]","R:[U R' U',M2]","R M:[U' R' U,M2]","[U' L2 U,M2]","U':[L' F L,S']","Not found.","D':[S',R' B' R]","[U R2 U',M2]","U:[R F' R',S]","[U R U',M2]","M:[U' R U,M2]","[U' L' U,M2]","M:[U L' U',M2]","[U' L U,M2]","M:[U L U',M2]","[U R' U',M2]","M:[U' R' U,M2]","Not found.","Not found.","Not found.","U D:[R' F R,S']","U L F L:[S',L2]","U':[S,L F L']","D:[R' B' R,S']","U M':[U,M U2 M]","U' R' F' R':[S,R2]","U:[S',R' F' R]","U:[R,U M' U']","U' L:[E',l' U l]","U':[L',U' M' U]","U R':[E,r U' r']","U':[L,U' M' U]","U r:[E',R' U' R]","U:[R',U M' U']","U' M':[L' E L,U]","L' U L:[S',L2]","[S,r' U r]","Not found.","l:[R E' R',U']","[M2,U' L2 U]","U':[U' M' U,L2]","l U:[R E' R',U2]","[M,U' L2 U]","U:[R2,S']","[S',R' B' R]","U' L':[E',L2]","u' L:[E,L2]","Not found.","u' L':[E',L2]","Not found.","U' E' L:[E,L2]","U' L:[E,L2]","U' E' L':[E',L2]","[L E L',U']","U':[L F' L',S]","U':[U',L E L']","r' U L':[E',L2]","U':[S',L' F L]","U':[L F L',S]","M U:[L2,S']","U':[S',R' D R]","[r D r',S]","l U' R:[E',R2]","L' E':[L U' L',E']","M U L':[E',L2]","S' U R:[E,R2]","[U' S' U,L]","S' U R':[E',R2]","[U' S' U,L']","L E:[L' U' L,E]","M U L:[E,L2]","l U':[R' E R,U2]","L B':[L2,E]","r' U:[L E' L',U2]","R' B:[R2,E']","M:[M,U2]","D:[S',R' B' R]","r' U:[L' E' L,U2]","M U:[S',L2]","l U':[R' E' R,U2]","M U':[S,R2]","U' R U:[M,U2]","r' U':[S,R2]","U D' R:[E,R2]","l U:[S',L2]","U D' R':[E',R2]","r2 F':[L2,E']","U' R' U:[M,U2]","R2 B':[E',R2]","L:[U' L' U,M]","l:[U L' U',M]","R':[U R U',M]","r':[U' R U,M]","D':[R' B' R,S']","U M:[U',M' U2 M']","[U' L2 U,M]","U':[R' D R,S']","[U R2 U',M]","U:[S',R B R']","[U R U',M]","M:[U' R U,M]","[U' L' U,M]","M:[U L' U',M]","[U' L U,M]","M:[U L U',M]","[U R' U',M]","M:[U' R' U,M]","Not found.","r':[L' E L,U]","R' U' R:[S,R2]","[S',R B' R']","[M2,U R2 U']","U' R' F' R:[S,R2]","U:[S',R2]","[S,r D r']","l U:[R' E' R,U2]","[M,U R2 U']","Not found.","u R:[E,R2]","U R:[E,R2]","u R':[E',R2]","U R':[E',R2]","U E R:[E,R2]","Not found.","U E R':[E',R2]","U:[U,R' E' R]","l U' R:[E,R2]","[R' E' R,U]","r' U R:[S,R2]","U:[S,R F' R']","U:[R' F' R,S']","[R' B' R,S']","l U' R':[E',R2]","M U':[R2,S]","U:[R B R',S']","S U' L':[E',L2]","[U S U',R']","R E:[R' U R,E]","M U' R:[E,R2]","R' E':[R U R',E']","M U' R':[E',R2]","S U' L:[E,L2]","[U S U',R]","[L' E2 L,U']","S' U' L:[E',L2]","E':[R' E R,U]","R' u R:[E,R2]","[M2,U R U']","U:[U M' U',R]","U' L:[E',L2]","L' E':[E',L U' L']","U' R U':[M,U2]","[M,U R U']","Not found.","S U' L:[E',L2]","R' U R:[E,R2]","[R U R',E]","[R U R',E2]","R:[U,R E' R']","U' R':[S,R2]","[R U R',E']","[L E' L',U']","r U:[M,U2]","U':[U',L E' L']","S':[L E' L',U']","M':[U' R U,M2]","U' M':[U,l E' l']","u' L':[E,L2]","M U L:[E',L2]","r' U':[R2,S]","U' M:[U',L E' L']","u R':[E,R2]","[R',U S U']","[E',L' U' L]","u' R:[S,R2]","L:[L E' L',U']","r' U' R':[E',R2]","[E,R' U R]","l U R':[S,R2]","E:[L E' L',U']","L u' L':[E',L2]","[R E2 R',U]","r':[E,R U' R']","[M2,U' L' U]","U':[U' M' U,L']","Not found.","S' U R':[E,R2]","U D' R':[E,R2]","[M,U' L' U]","U R':[E,R2]","R E:[E,R' U R]","R' U R':[E,R2]","[L' U' L,E']","U L:[S',L2]","[L' U' L,E]","R U R':[E,R2]","L':[U',L' E L]","U:[U,R' E R]","S:[R' E R,U]","[R' E R,U]","l' U':[M,U2]","M':[U L' U',M2]","U M':[U',r' E r]","u' L:[E',L2]","[L,U' S' U]","l U:[L2,S']","M:[M,U L' U']","u R:[E',R2]","M U' R':[E,R2]","[E,R U R']","u' R':[S,R2]","R' E:[R U R',E]","M U' L:[S',L2]","R':[R' E R,U]","[E2,r' U' r]","E':[L' E L,U']","r' U':[U',r E' r']","[R' E2 R,U]","S U R:[E',R2]","[M2,U' L U]","U':[U' M' U,L]","Not found.","S' U R:[E',R2]","U L U:[M,U2]","[M,U' L U]","U R:[E',R2]","R' E':[E',R U R']","[E2,R U R']","L:[U',L E' L']","U L':[S',L2]","R' E:[E,R U R']","R U R:[E',R2]","[L U' L',E]","U:[U,R E' R']","S:[R E' R',U]","[R E' R',U]","M' L U':[M,U2]","M':[U L U',M2]","U M':[U',R E' R']","U' E' L':[E,L2]","[L',U' S' U]","Not found.","M:[M,U L U']","U E R':[E,R2]","M U' R:[E',R2]","R:[R E' R',U]","r' U' R:[E',R2]","[E,L' U' L]","r' U' L':[S',L2]","[E',R' U R]","U' E' R:[S,R2]","[L E2 L',U']","S' U' L':[E,L2]","E:[R E' R',U]","l U:[U,l' E l]","[M2,U R' U']","U:[U M' U',R']","U' L':[E,L2]","L E:[E,L' U' L]","U' R' U':[M,U2]","[M,U R' U']","Not found.","R u R:[E,R2]","U' R:[S,R2]","[R' U R,E]","R U R:[E,R2]","R':[U,R' E R]","R U R':[E',R2]","[R' U R,E']","[L' E L,U']","R' M' U:[M,U2]","U':[U',L' E L]","S':[L' E L,U']","M':[U' R' U,M2]","U' M':[U,L' E L]","U' E' L:[E',L2]","S:[L' E L,U']","R l U':[R2,S]","M:[M,U' R' U]","U E R:[E',R2]","[R,U S U']","[E',R U R']","M U R:[S,R2]","L':[L' E L,U']","[r' U' r,E2]","[E,L U' L']","U' E' R':[S,R2]"]

/*export*/
/*myString= keys(times['corners BLD'].UFR).map(x=>times['corners BLD'].UFR[x].reaction.map((y,i)=>x+';'+times['corners BLD'].UFR[x].reaction[i]+';'+times['corners BLD'].UFR[x].exec_time[i]+';'+times['corners BLD'].UFR[x].total_time[i]+';'+times['corners BLD'].UFR[x].TPS[i] ).join('\n') ).join('\n')*/
/*function exportToFile() {

    window.open('data:text/csv;charset=utf-8,' + escape(myString));
}
exportToFile();*/

/*groups*/
/*RUD gen*/
// pairsTable=eUBalgs.slice().filter(x=>x.match("^([RU'2 D]+|[LU'2 D]+)$")).shuffle().map(x=>eUBnms[eUBalgs.indexOf(x)])
/* pure comm*/
// pairsTable=eUBcomms.slice().filter(x=>x.match('^\\[')).shuffle().map(x=>eUBnms[eUBcomms.indexOf(x)])
// one setup comm
// pairsTable=eUBcomms.slice().filter(x=>x.match("^[rubfldRUDBFLxyzMES]['2]? *: *\\[")).shuffle().map(x=>eUBnms[eUBcomms.indexOf(x)])
// two setup comm
// pairsTable=eUBcomms.slice().filter(x=>x.match("^[rubfldRUDBFLxyzMES]['2]? *[rubfldRUDBFLxyzMES]['2]? *: *\\[")).shuffle().map(x=>eUBnms[eUBcomms.indexOf(x)])
// three setup comm
// pairsTable=eUBcomms.slice().filter(x=>x.match("^[rubfldRUDBFLxyzMES]['2]? *[rubfldRUDBFLxyzMES]['2]? *[rubfldRUDBFLxyzMES]['2]? *: *\\[")).shuffle().map(x=>eUBnms[eUBcomms.indexOf(x)])
// four setup comm
// pairsTable=eUBcomms.slice().filter(x=>x.match("^[rubfldRUDBFLxyzMES]['2]? *[rubfldRUDBFLxyzMES]['2]? *[rubfldRUDBFLxyzMES]['2]? *[rubfldRUDBFLxyzMES]['2]? *: *\\[")).shuffle().map(x=>eUBnms[eUBcomms.indexOf(x)])
// no comm found
// pairsTable=eUBalgs.slice().filter((x,i)=>x.match("^[MU'2 D]+$") && eUBcomms[i].match('found')).shuffle().map(x=>eUBnms[eUBalgs.indexOf(x)])
/*PICK WORST ALGS*/
// allUFedgesTimes=Object.entries(times['corners BLD'].UFR).map(([i,v])=>[i,v.total_time.filter(x=>x<5).reduce((x,y)=>x+y,50)/v.total_time.filter(x=>x<5).length])
// allUFedgesTimes.sort((a,b)=>b[1]-a[1]).filter((x,y)=>x[1]<100)
// pairsTable=allUFedgesTimes.slice(0,20).map(([x,y])=>x).shuffle()
// updatePairs(pairsTable)
memo_map={"AJ":"garnek",
"AI":"ron",
"AL":"alina",
"AK":"kałach",
"AF":"amfa",
"AE":"pistolet",
"AH":"ahus",
"AG":"aga",
"AP":"aparat",
"AO":"ao(duch)",
"AN":"ania",
"AM":"amelie",
"AD":"ada",
"AW":"taco",
"AR":"arcio",
"AZ":"aza",
"AS":"assasin",
"ASZ":"amisz",
"AT":"ator",
"AU":"sebastien",
"CJ":"cabaj",
"CI":"cinos",
"WD":"woda",
"DW":"dawaj",
"DR":"dercz",
"RD":"rodzi",
"RW":"rów",
"WR":"worek",
"WZ":"waza",
"ZW":"zwieracz",
"ZD":"zidane",
"DZ":"dziedziul",
"CL":"cela(więzienie)",
"CK":"czeka|cekała",
"CF":"kopać(soccer)",
"CE":"znak",
"CH":"czechy(czech od kostki)",
"CG":"cegła",
"CP":"czapka",
"CO":"kokos",
"CN":"cannes(dominika)|ceni",
"CM":"spust",
"CD":"cd",
"CW":"ćwiczyć",
"CR":"ronaldo",
"CZ":"cezik",
"CS":"cs",
"CSZ":"czaszka",
"CT":"czyta",
"CU":"nienawidzi",
"BJ":"bajka",
"BI":"bi",
"CB":"ciebie",
"BC":"Baca",
"BA":"Babcia",
"AB":"abelard",
"CA":"Cola|cały",
"AC":"Ace",
"BL":"bal",
"BK":"beka(baka?)",
"BF":"bufon",
"BE":"dziecko",
"JI":"maskow",
"IJ":"pepkin",
"IK":"ikar",
"KI":"kino",
"BH":"bach",
"BG":"bóg(jezus)",
"BP":"baptista",
"BO":"bono",
"BN":"banan",
"BM":"bomba",
"BD":"buduje",
"BW":"bałwan",
"BR":"borat",
"BZ":"buzz astral",
"BS":"bas",
"BSZ":"busz(george)",
"BT":"but",
"BU":"bu",
"JF":"jeff(jeffrey dahmer)",
"JE":"biedronka",
"JH":"jehowy",
"JG":"jagła",
"JP":"papież",
"JO":"wieśniak",
"JN":"jan",
"JM":"usta|jem",
"JD":"jeden(pała!)",
"JW":"żyd",
"JR":"jerzy",
"JZ":"jeżyk",
"JS":"jest",
"JSZ":"janusz",
"JT":"jutro|jet(samolot)",
"JU":"justyna(kowalczyk",
"IF":"piekło(inferno)",
"LI":"bruce",
"IL":"chory",
"IE":"bill(gates)",
"IH":"ihanio",
"IG":"igła",
"IP":"różowy",
"IO":"olimpiada(olimpijczyk, atleta)",
"IN":"inka",
"IM":"islam|im",
"ID":"ida",
"IW":"iwona",
"IR":"irenka",
"IZ":"iza",
"IS":"isia(od tenisa)",
"ISZ":"ił(samolot?)",
"IT":"klaun",
"IU":"plechoss",
"LF":"lufa",
"LE":"leniwiec",
"LH":"lechu",
"LG":"legionista",
"LP":"łapicki|łapie",
"LO":"liceum",
"LN":"lanos",
"LM":"lama",
"LD":"lider",
"LW":"lewak",
"LR":"lora",
"LZ":"lazania",
"LS":"leśniczy",
"LSZ":"łazucha",
"LT":"latawiec",
"LK":"leczy",
"KL":"Kołecki",
"LU":"łu",
"KF":"kawa",
"KE":"kermit",
"KH":"kochać",
"KG":"gimbus",
"KP":"kipek",
"KO":"kurczak",
"KN":"kanar",
"KM":"komórka",
"KD":"kadziewicz",
"KW":"kwas(konstanty)",
"KR":"kora",
"KZ":"kozyra",
"KS":"kosiara",
"KSZ":"kłamca",
"KT":"kot",
"KU":"kurwa",
"FP":"fapuje",
"FO":"foch",
"FN":"fanatyk",
"FM":"feministka(z mema)",
"FD":"penis",
"FW":"faworek",
"FR":"frank|futro",
"FZ":"faza(robert jałowski)",
"FS":"fusy",
"FSZ":"farsz(gulasz)",
"FT":"fotel",
"FU":"funfel",
"EP":"mnich",
"EO":"freedie",
"EN":"kawaler",
"EM":"kusznik(kusza)",
"ED":"eddie",
"EW":"ewa",
"ER":"europa",
"EZ":"rycerz",
"ES":"anioł",
"ESZ":"ełk(kamil czajka)",
"ET":"ent(drzewo)",
"EU":"czempion",
"HP":"peja",
"HO":"żołnierz",
"HN":"hania",
"HM":"ham",
"HD":"chudy(z edd edd eddy)",
"HW":"hannawald|chwali",
"HR":"kasa|hrynek",
"HZ":"hazard(poker)",
"HS":"husarz",
"HSZ":"chałwa",
"HT":"gorący",
"HU":"hunor",
"GP":"gimper",
"GO":"gogo",
"GN":"gówno(kupa)",
"GM":"gamowa",
"GD":"gdynia",
"GW":"gwizdek",
"GR":"gra",
"GZ":"giziewicz",
"GS":"gus",
"GSZ":"głogowska",
"GT":"gotuje",
"GU":"gustaw",
"PD":"podolski",
"PW":"paw",
"PR":"por",
"PZ":"pozuje|punizm",
"PS":"pies",
"PSZ":"pszenica",
"PT":"pot",
"PU":"puszcza",
"OD":"odder",
"OW":"antros",
"OR":"oreo",
"OZ":"ozzy",
"OS":"osa",
"OSZ":"dawid gilmour",
"OT":"otrzymał",
"OU":"moran(michele)",
"ND":"nadia",
"NW":"nowa(gwiazda supernowa)",
"NR":"norek|narazie",
"NZ":"nazista",
"NS":"nos",
"NSZ":"nałóg(ćpać)",
"NT":"natanek",
"NU":"null",
"MD":"moda",
"MW":"mewa",
"MR":"moro",
"MZ":"morze",
"MS":"musiał",
"MSZ":"moszna",
"MT":"mats",
"MU":"krowa",
"DS":"dostać",
"DSZ":"dusić",
"DT":"kropka",
"DU":"duży",
"WS":"wasal",
"WSZ":"włamywacz(złodziej)",
"WT":"wata",
"WU":"wuwuzela",
"RS":"rosół",
"RSZ":"roszpunka(syrenka)",
"RT":"szczur",
"RU":"rusek",
"ZS":"zespół",
"ZSZ":"złom",
"ZT":"zatorski",
"ZU":"maria",
"JA":"ja",
"IA":"biały",
"LA":"las",
"KA":"kinia",
"FA":"mydło",
"EA":"łucznik",
"HA":"zabawny",
"GA":"gaga",
"PA":"marcell",
"OA":"sekta",
"NA":"",
"MA":"mama",
"DA":"pewdiepie",
"WA":"warszawa",
"RA":"słońce",
"ZA":"za|zazu",
"SA":"szafrańska",
"SZA":"borek(szaran)",
"TA":"góral",
"UA":"szaranowicz",
"UT":"utrzymuje",
"TU":"tutaj",
"TS":"Teska",
"ST":"Starostek",
"SU":"suka",
"US":"ustawił",
"LJ":"leje",
"JL":"jeleń",
"OP":"stefan",
"PO":"PO|tusk",
"PM":"Pomaga",
"MP":"Mapa",
"MO":"moon",
"OM":"Matematyk",
"JK":"jak",
"KJ":"Kojot",
"JC":"jacek",
"WR":"worek",
"RW":"rów",
"RZ":"Rozenek",
"ZR":"ZR",
"WZ":"Waza",
"ZW":"Zwieracz",
"EF":"Effy",
"FE":"Feniks",
"EG":"jajko",
"GE":"Geniusz",
"GH":"duch",
"FG":"pedał",
"GF":"dziewczyna|gif",
"HG":"hugo",
"HF":"kniter",
"FH":"fartuch",
"IC":"izak",
"LC":"lucek",
"KC":"kac",
"FC":"facet",
"EC":"gryf",
"HC":"hucz(z darwina)",
"GC":"gacie",
"PC":"komputer",
"OC":"orczyk",
"NC":"nocnik(kibel)",
"MC":"mocz",
"DC":"doktor",
"WC":"cejrowski",
"RC":"cieciu",
"ZC":"zac(efron)",
"SC":"speedcube?",
"SZC":"",
"TC":"taca",
"UC":"ucieka",
"JB":"bieber|jebany",
"IB":"murzyn",
"LB":"lubi",
"KB":"kabanos",
"FB":"fabian",
"EB":"pikinier",
"HB":"hubert",
"GB":"gabrysia",
"PB":"pumba",
"OB":"obraniak",
"NB":"nabiał",
"MB":"noob",
"DB":"dobry",
"WB":"wasabi",
"RB":"robert",
"ZB":"zborowski",
"SB":"esbek",
"SZB":"szuba",
"TB":"tobiasz",
"UB":"ubranie",
"FJ":"fajka",
"EJ":"miecz",
"HJ":"chuj?",
"GJ":"gej",
"PJ":"pojeb",
"OJ":"olejnik",
"NJ":"najki",
"MJ":"mojo",
"DJ":"dalajlama",
"WJ":"wojewódzki",
"RJ":"rojo/raj",
"ZJ":"ziaja(krem)",
"SJ":"sajwo",
"SZJ":"szejk",
"TJ":"tajka",
"UJ":"ujebany",
"FI":"małysz",
"EI":"smok",
"HI":"hitler",
"GI":"ginie",
"PI":"pi",
"OI":"waters",
"NI":"samaras",
"MI":"mimi(myszka)",
"DI":"dio",
"WI":"kalina",
"RI":"rio(tancerka)",
"ZI":"zimny",
"SI":"stępień",
"SZI":"szisza",
"TI":"tina",
"UI":"świnia",
"FL":"fala",
"EL":"ela",
"HL":"pijak",
"GL":"obeliks",
"PL":"polak",
"OL":"ola",
"NL":"?nala",
"ML":"mały|mola",
"DL":"dolan",
"WL":"wolniewicz",
"RL":"rolnik",
"ZL":"zalew",
"SL":"solo|slav",
"SZL":"portfel",
"TL":"telefon",
"UL":"ula",
"FK":"foka",
"EK":"eskimos",
"HE":"halczuk",
"EH":"zamek",
"HK":"hak",
"GK":"geek",
"PK":"pączek",
"OK":"oko?",
"NK":"nerka",
"MK":"mąka",
"DK":"dokument",
"WK":"wkurwia",
"RK":"rak",
"ZK":"zaku",
"SK":"sok",
"SZK":"łąka",
"TK":"tak",
"UK":"brytania",
"PF":"pufa",
"OF":"oferma",
"NF":"nafta",
"MF":"mafia",
"DF":"tarcza",
"WF":"wuefista(wilk)",
"RF":"rafatus",
"ZF":"zofia(cieica zosia)",
"SF":"szef",
"SZF":"szafa",
"TF":"tiffany",
"UF":"ufo",
"PE":"pepe",
"OE":"oey",
"NE":"neo",
"ME":"mistrz",
"DE":"euklides",
"WE":"wewnątrz??",
"RE":"rezi",
"ZE":"żeri",
"SE":"erikson",
"SZE":"?easy",
"TE":"anisimowicz",
"UE":"komunista",
"PH":"pha|puch(snieg)",
"OH":"oh",
"NH":"nehelenia",
"MH":"moher",
"DH":"dachu",
"WH":"wąha|wachlarz",
"RH":"rucha",
"ZH":"zych",
"SH":"sohayo",
"SZH":"?szach",
"TH":"tahini",
"UH":"ucho",
"PG":"pg",
"OG":"ogr",
"NG":"negan",
"MG":"megu",
"DG":"dagmara",
"WG":"waga",
"RG":"róg",
"ZG":"żygadło",
"SG":"sajgon",
"SZG":"?szogun",
"TG":"toga",
"UG":"UG",
"DP":"dupa",
"WP":"kosiński",
"RP":"gwałci|raper",
"ZP":"zupa",
"SP":"sęp",
"SZP":"szparagi",
"TP":"topolska|topi",
"UP":"uparty|osioł",
"DO":"dodo",
"WO":"wojna",
"RO":"włod",
"ZO":"cyborg",
"SO":"sos",
"SZO":"szop",
"TO":"toto",
"UO":"fiat",
"DN":"donald",
"WN":"wanna",
"RN":"rana",
"ZN":"zin",
"SN":"sen",
"SZN":"łan/łąki łan",
"TN":"taniec",
"UN":"uno(tora tora)",
"DM":"dom",
"WM":"wam|wombat",
"RM":"rzym",
"ZM":"zmywać",
"SM":"smoleńsk",
"SZM":"łom",
"TM":"tomek",
"UM":"umył",
"SD":"szydło",
"SZD":"",
"TD":"tede",
"UD":"uda",
"SW":"sylwek(reszkE!!)",
"SZW":"ławka?",
"TW":"twój|tawerna",
"UW":"uwaga|",
"SR":"ser|sra",
"SZR":"?",
"TR":"tyrion",
"UR":"urna|uratował",
"SZ":"szmata",
"SZZ":"łazanki(pierogi",
"TZ":"pikachu",
"UZ":"uzi"}


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
         'RBD':[7,1],
         'FRU':[0,2],
         'LFU':[1,2],
         'BLU':[2,2],
         'RBU':[3,2],
         'RDF':[4,2],
         'FDL':[5,2],
         'LBD':[6,2],
         'BDR':[7,2]}
}

sticker_map_rev={
	'edges':[Array(12),Array(12)],
	'corners':[Array(8),Array(8),Array(8)]}

for (const [key, value] of Object.entries(sticker_map.edges)) {
  sticker_map_rev.edges[value[1]][value[0]]=key
}

for (const [key, value] of Object.entries(sticker_map.corners)) {
  sticker_map_rev.corners[value[1]][value[0]]=key
}

letter_stickers={
    'edges':
	    {'UF':{
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
	     'UB':{
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
	        'N':'BR',
	        'O':'BD',
	        'P':'BL',
	        'R':'LD',
	        'S':'RF',
	        'T':'RD',
	        'U':'RB',
	        'W':'LU',
	        'Z':'LF'
	        }},
    'corners':{
    	  'UFR':{
	        'A':'UBL',
	        'B':'UFL',
	        'C':'UBR',
	        'D':'LBU',
	        'E':'DFR',
	        'F':'DFL',
	        'G':'DBL',
	        'H':'DBR',
	        'I':'BRU',
	        'J':'FLU',
	        'K':'FDL',
	        'L':'FDR',
	        'M':'BLU',
	        'P':'BDL',
	        'O':'BDR',
	        'R':'LBD',
	        'S':'RBU',
	        'T':'RDF',
	        'U':'RBD',
	        'W':'LFU',
	        'Z':'LDF'},
    	'UBR':{
	        'A':'UBL',
	        'B':'UFL',
	        'D':'LBU',
	        'E':'DFR',
	        'F':'DFL',
	        'G':'DBL',
	        'H':'DBR',
	        'J':'FLU',
	        'K':'FDL',
	        'L':'FDR',
	        'M':'BLU',
	        'P':'BDL',
	        'O':'BDR',
	        'R':'LBD',
	        'T':'RDF',
	        'U':'RBD',
	        'W':'LFU',
	        'Z':'LDF'}}
    }

letter_stickers_rev={
	'edges':{},
	'corners':{}}

for (const [key, value] of Object.entries(letter_stickers.edges)) {
	letter_stickers_rev.edges[key]={}
	for(const [keyIn, valueIn] of Object.entries(letter_stickers.edges[key])){
		letter_stickers_rev.edges[key][valueIn]=keyIn
	}
}

for (const [key, value] of Object.entries(letter_stickers.corners)) {
	letter_stickers_rev.corners[key]={}
	for(const [keyIn, valueIn] of Object.entries(letter_stickers.corners[key])){
		letter_stickers_rev.corners[key][valueIn]=keyIn
	}
}

    function corner3twist(cube,buffer,cornerIndexes,twistDir) {
    	// cube.newCp=[0,1,2,3,4,5,6,7];
    	// cube.newCo=[0,0,0,0,0,0,0,0];
    	// cube.newEp=[0,1,2,3,4,5,6,7,8,9,10,11];
    	// cube.newEp=[0,0,0,0,0,0,0,0,0,0,0,0];
    	// assuming buffer is U/D oriented
    	cube.identity()
    	excludeBufferIndex=sticker_map_rev.corners[0].indexOf(buffer)
    	cube.newCo[excludeBufferIndex]=twistDir
    	LPtwist=[]
        for(var i = 0; i<cornerIndexes.length; i++){
            cube.newCo[cornerIndexes[i]]=twistDir
            LPtwist=LPtwist.concat(letter_stickers_rev.corners[buffer][sticker_map_rev.corners[3-twistDir][cornerIndexes[i]]])
        }
        [cube.co, cube.newCo] = [cube.newCo, cube.co];
        return [cube, LPtwist];
      }

function LTCT(cube,cornerIndexes,twistDir,targetTwist,buffer=0,edgeSwap=[[1,0],[0,0]]) {
		cube.identity();
		cube.co=[0,0,0,0,0,0,0,0]
		cube.cp=[0,1,2,3,4,5,6,7]
	    cube.newCp=[0,1,2,3,4,5,6,7];
    	cube.newCo=[0,0,0,0,0,0,0,0];
    	cube.newEp=[0,1,2,3,4,5,6,7,8,9,10,11];
    	cube.newEo=[0,0,0,0,0,0,0,0,0,0,0,0];
	    edgeOr=(edgeSwap[0][1]+edgeSwap[1][1]) % 2;
	    cube.newEp[edgeSwap[0][0]] = edgeSwap[1][0];
	    cube.newEp[edgeSwap[1][0]] = edgeSwap[0][0];
	    cube.newEo[edgeSwap[0][0]]=edgeOr;
	    cube.newEo[edgeSwap[1][0]]=edgeOr;
    	// cube.newCp=[0,1,2,3,4,5,6,7];
    	// cube.newCo=[0,0,0,0,0,0,0,0];
    	// cube.newEp=[0,1,2,3,4,5,6,7,8,9,10,11];
    	// cube.newEp=[0,0,0,0,0,0,0,0,0,0,0,0];
    	// assuming buffer is U/D oriented
    	// cube.identity()
    	excludeBufferIndex=sticker_map_rev.corners[0].indexOf(buffer)
    	/*first corner index=target, second= twist*/
    	if(cornerIndexes.includes(buffer)){
    		console.log("Check if corner indexes argument contains the buffer")
    		return
    	}
    	cube.newCp[buffer] = cornerIndexes[0];
    	cube.newCp[cornerIndexes[0]] = buffer;

    	cube.newCo[cornerIndexes[0]] = targetTwist;
    	cube.newCo[cornerIndexes[1]] = twistDir;
        // console.log(targetTwist);
    	cube.newCo[buffer] = (6-targetTwist-twistDir)%3;
    	// const newVal=(cube.newCo[cornerIndexes[0]]+3-targetTwist) % 3;
    	// cube.newCo[cornerIndexes[0]] = newVal;
       
        
        // console.log(LPr)
        /*UU -UD-  DU- DD case?*/
        
        // console.log([cube.newCo, cube.co])
        // console.log("cube:", cube);
        // console.log("co:", cube?.co);
        // console.log("newCo:", cube?.newCo);
        // console.log(cube.co, cube.newCo)
        const nco = cube.newCo;
        // console.log(nco);
        cube.co= nco;
        cube.newCo = [0,0,0,0,0,0,0,0];
        // [cube.co, cube.newCo] = [cube.newCo, cube.co];
        [cube.cp, cube.newCp] = [cube.newCp, cube.cp];
        [cube.eo, cube.newEo] = [cube.newEo, cube.eo];
        [cube.ep, cube.newEp] = [cube.newEp, cube.ep];
         /*fetch the associated LP*/
        var LPr=[];
        LPr[0]=letter_stickers_rev.corners.UFR[sticker_map_rev.corners[targetTwist][cornerIndexes[0]]];
        LPr[1]=letter_stickers_rev.corners.UFR[sticker_map_rev.corners[(3-twistDir)%3][cornerIndexes[1]]];
        LPr=LPr.join('');
        caseType=(cornerIndexes[0]>3?'D':'U')+(cornerIndexes[1]>3?'D':'U');
        // console.log(LPr)
        return [cube, LPr, caseType];
      }

    function edges2flip(cube,edgesIndexes) {
    	// cube.newCp=[0,1,2,3,4,5,6,7];
    	// cube.newCo=[0,0,0,0,0,0,0,0];
    	// cube.newEp=[0,1,2,3,4,5,6,7,8,9,10,11];
    	// cube.newEp=[0,0,0,0,0,0,0,0,0,0,0,0];
    	// assuming buffer is U/D oriented
    	cube.identity()
    	// excludeBufferIndex=sticker_map_rev.corners[0].indexOf(buffer)
    	// cube.newEo[excludeBufferIndex]=1
    	// LPtwist=[]
        for(var i = 0; i<edgesIndexes.length; i++){
            cube.newEo[edgesIndexes[i]]=1
            // LPtwist=LPtwist.concat(letter_stickers_rev.corners[buffer][sticker_map_rev.corners[3-twistDir][edgesIndexes[i]]])
        }
        [cube.eo, cube.newEo] = [cube.newEo, cube.eo];
        return cube;
      }


    function cornerMultiply(cube,cycle) {
    	// cube.newCp=[0,1,2,3,4,5,6,7];
    	// cube.newCo=[0,0,0,0,0,0,0,0];
    	// cube.newEp=[0,1,2,3,4,5,6,7,8,9,10,11];
    	// cube.newEp=[0,0,0,0,0,0,0,0,0,0,0,0];
        var from, k, to;
        // console.log(cycle)
        from = cycle.map(x=>x[0])
        // console.log(from)
        to = [from[1],from[2],from[0]]
        // console.log(to)
        or=cycle.map(x=>x[1])
        or=[3+-or[0]+or[1],3+-or[1]+or[2],3+or[0]-or[2]]
        // console.log(or)
        for (k = 0; k <= 2; k++) {
          cube.newCp[to[k]] = cube.cp[from[k]];
          cube.newCo[to[k]] = (cube.co[from[k]] + or[k]) % 3;
        }
        [cube.cp, cube.newCp] = [cube.newCp, cube.cp];
        [cube.co, cube.newCo] = [cube.newCo, cube.co];
        return cube;
      }

    function edgesMultiply(cube,cycle) {
    	// cube.newCp=[0,1,2,3,4,5,6,7];
    	// cube.newCo=[0,0,0,0,0,0,0,0];
    	// cube.newEp=[0,1,2,3,4,5,6,7,8,9,10,11];
    	// cube.newEp=[0,0,0,0,0,0,0,0,0,0,0,0];
        var from, k, to;
        from = cycle.map(x=>x[0])
        // console.log(from)
        to = [from[1],from[2],from[0]]
        // console.log(to)
        or=cycle.map(x=>x[1])
        or=[2+-or[0]+or[1],2+-or[1]+or[2],2+or[0]-or[2]]
        // console.log(or)
        for (k = 0; k <= 2; k++) {
          cube.newEp[to[k]] = cube.ep[from[k]];
          cube.newEo[to[k]] = (cube.eo[from[k]] + or[k]) % 2;
        }
        [cube.ep, cube.newEp] = [cube.newEp, cube.ep];
        [cube.eo, cube.newEo] = [cube.newEo, cube.eo];
        return cube;
      }

    function permuteLCCT(cube,cycle,twist){
        //generate random case firstly
        cornersComm=shuffleElements()
	    cornersComm[0]=cornersComm[0].filter(i=>i!==0)
	    cycle=cornersComm[0].slice(0,2).map((v,i)=>letter_stickers_rev.corners.UFR[sticker_map_rev.corners[cornersComm[1][i]][cornersComm[0][i]]])
	    //console.log(cornersComm[0])
	    console.log(cycle)
	    //twist
	    twistEl=cornersComm[0][2]
	    twistDir=Math.random()>.5?1:2
	    //console.log(twistEl,twistDir)
	    twistLetters=[letter_stickers_rev.corners.UFR[sticker_map_rev.corners[twistDir][twistEl]],letter_stickers_rev.corners.UFR[sticker_map_rev.corners[0][twistEl]]]
	    console.log(twistLetters)

	    var orbit=[sticker_map.corners['UFR']]
	    if (typeof cycle === "string"){cycle=cycle.split('')}
	    // console.log(buffer,cycle);
	    orbit=orbit.concat(cycle.map(x=>sticker_map.corners[letter_stickers.corners['UFR'][x]]))
	    console.log(orbit)
	    cube.identity();
	    cornerMultiply(cube,orbit);
        //execute twist- one element cw, buffer piece ccw or other way
        cube.co[0]=(cube.co[0]+twistDir) % 3
        cube.co[cornersComm[0][2]] =(cube.co[cornersComm[0][2]]-twistDir+3) % 3 
        //[cube.co[twistEl], cube.newCo[twistEl]]=[cube.newCo[twistEl],cube.co[twistEl]]
        //[cube.co[cornersComm[0][1]], cube.newCo[cornersComm[0][1]]]=[cube.newCo[cornersComm[0][1]],cube.co[cornersComm[0][1]]]
        return [cycle.join(''), twistLetters.join('')].join(' ');
	    }

    function permuteCycleCorners(cube,buffer,cycle){
	    var orbit=[sticker_map.corners[buffer]]
	    if (typeof cycle === "string"){cycle=cycle.split('')}
	    // console.log(buffer,cycle);
	    orbit=orbit.concat(cycle.map(x=>sticker_map.corners[letter_stickers.corners[buffer][x]]))
	    cube.identity();
	    cornerMultiply(cube,orbit);}

	function permuteCycle2Comms(cube,buffer,cycle){
		tmptype=buffer.length=='2'?'edges':'corners'
		var orbit=[sticker_map[tmptype][buffer]]
		// assign correct arrays
		edgesAlgs=buffer=='UF'?ealgs.slice():eUBalgs.slice()
		edgesNames=buffer=='UF'?enms.slice():eUBnms.slice()
	    if (typeof cycle === "string"){cycle=cycle.split('')}
	    // console.log(buffer,cycle);
	    orbit=orbit.concat(cycle.map(x=>sticker_map[tmptype][letter_stickers[tmptype][buffer][x]]))
	    cube.identity();
	    if(tmptype=='corners'){
	    	console.log('alg'+cycle[0]+cycle[1])
	    	    cube.move(convertToRaw(calgs[cnms.indexOf(cycle[0]+cycle[1])])+" "+convertToRaw(calgs[cnms.indexOf(cycle[2]+cycle[3])]))
	    	    }else{
	    	console.log('alg'+convertToRaw(edgesAlgs[edgesNames.indexOf(cycle[0]+cycle[1])])+" "+convertToRaw(edgesAlgs[edgesNames.indexOf(cycle[2]+cycle[3])]))
	    	    cube.move(convertToRaw(edgesAlgs[edgesNames.indexOf(cycle[0]+cycle[1])])+" "+convertToRaw(edgesAlgs[edgesNames.indexOf(cycle[2]+cycle[3])]))
	    	    }
	}

	function permuteCycleEdges(cube,buffer,cycle){
	    var orbit=[sticker_map.edges[buffer]]
	    if (typeof cycle === "string"){cycle=cycle.split('')}
	    orbit=orbit.concat(cycle.map(x=>sticker_map.edges[letter_stickers.edges[buffer][x]]))
	    cube.identity();
	    edgesMultiply(cube,orbit);}

	function generatePairity(cube,cornerSwap,edgeSwap = [[3,0],[0,0]]){
	    cube.identity();
	    cube.newCp=[0,1,2,3,4,5,6,7];
    	cube.newCo=[0,0,0,0,0,0,0,0];
    	cube.newEp=[0,1,2,3,4,5,6,7,8,9,10,11];
    	cube.newEo=[0,0,0,0,0,0,0,0,0,0,0,0];
	    edgeOr=(edgeSwap[0][1]+edgeSwap[1][1]) % 2;
	    cube.newEp[edgeSwap[0][0]] = edgeSwap[1][0];
	    cube.newEp[edgeSwap[1][0]] = edgeSwap[0][0];
	    cube.newEo[edgeSwap[0][0]]=edgeOr;
	    cube.newEo[edgeSwap[1][0]]=edgeOr;
	    cube.newCp[cornerSwap[0][0]] = cornerSwap[1][0];
	    cube.newCp[cornerSwap[1][0]] = cornerSwap[0][0];
	    cube.newCo[cornerSwap[0][0]] = (3+cornerSwap[0][1]-cornerSwap[1][1]) % 3;
	    cube.newCo[cornerSwap[1][0]] = (3+cornerSwap[1][1]-cornerSwap[0][1]) % 3;
	    [cube.ep,cube.eo,cube.cp,cube.co] = [cube.newEp,cube.newEo,cube.newCp,cube.newCo];
	    }

	function convertAcjs(cube_acjs){
		var arr=cube_acjs.slice()
		arr=[[arr[0][0],arr[0][3],arr[0][6],arr[0][1],arr[0][4],arr[0][7],arr[0][2],arr[0][5],arr[0][8]],
		    [arr[1][6],arr[1][7],arr[1][8],arr[1][3],arr[1][4],arr[1][5],arr[1][0],arr[1][1],arr[1][2]],
		    [arr[2][0],arr[2][3],arr[2][6],arr[2][1],arr[2][4],arr[2][7],arr[2][2],arr[2][5],arr[2][8]],
		    [arr[3][0],arr[3][3],arr[3][6],arr[3][1],arr[3][4],arr[3][7],arr[3][2],arr[3][5],arr[3][8]],
		    [arr[4][2],arr[4][1],arr[4][0],arr[4][5],arr[4][4],arr[4][3],arr[4][8],arr[4][7],arr[4][6]],
		    [arr[5][0],arr[5][3],arr[5][6],arr[5][1],arr[5][4],arr[5][7],arr[5][2],arr[5][5],arr[5][8]]]
		res = arr.map((x,i)=>arr
			[[0,3,4,1,5,2].indexOf(i)]).flat().map(x=>x==10?'U':x==11?'D':x==12?'L':x==13?'R':x==15?'B':'F')
		return res.join('')
        // res = [res[6],res[7],res[8],res[3],res[4],res[5],res[0],res[1],res[2],
        // 	   ]
		//     .map((x,i)=>[0,1,2,3,4,5,6,7,8,
		//     	  9,10,11,12,13,14,15,16,17,
		//     	  18,19,20,21,22,23,24,25,26,
		//     	  27,28,29,30,31,32,33,34,35,
		//     	  36,37,38,39,40,41,42,43,44,
		//     	  45,46,47,48,49,50,51,52,53])
	}

	function swap(json){
	  var ret = {};
	  for(var key in json){
	    ret[json[key]] = key;
	  }
	  return ret;
	}

	function generatePairs(el_type,buffer,firsttrg){
        const rev_let_stick=swap(letter_stickers[el_type][buffer])
        const bufInd=Object.keys(letter_stickers[el_type]).indexOf(buffer)
        const ignoreIndexes=[
        	    sticker_map[el_type][buffer][0],
        	    sticker_map[el_type][letter_stickers[el_type][buffer][firsttrg]][0]
        	]
        if(bufInd>0){
        	Object.keys(letter_stickers[el_type]).slice(0,bufInd).map(x=>ignoreIndexes.push(sticker_map[el_type][x][0]))
        }
        els=Object.entries(sticker_map[el_type])
        var letters=[]
        for(var i=0;i<els.length;i++){
        	if(!(ignoreIndexes.includes(els[i][1][0]))){
        		letters.push(rev_let_stick[els[i][0]])
        	}
        }
        // console.log(letters,firsttrg)
        return letters.map(x=>[[firsttrg,x],[x,firsttrg]]).shuffle()
	}



	function generatePairs3Twists(cube,buffer){
		LPs=[]
		expected_states=[]
        for(i=1;i<8;i++){
		    for(j=i+1;j<8;j++){
			    // console.log(j,i)
			    twa=corner3twist(cuber,'UFR',[i,j],1)
    			LPs=LPs.concat(twa[1].join(''))
   				expected_states=expected_states.concat(twa[0].asString())
   				twa=corner3twist(cuber,'UFR',[i,j],2)
   				LPs=LPs.concat(twa[1].join(''))
   				expected_states=expected_states.concat(twa[0].asString())
		    }}
        // console.log(cases.map(x=>x[1]))
        // LPs=cases.map(x=>x[1].join(''))
        // expected_states=cases.map(x=>x[0])
        return[LPs,expected_states]
	}


	function generatePairsLTCT(cube,buffer,typeFilter=null){
		LPs=[];
		expected_states=[];
		ltctType=[];
        for(i=1;i<8;i++){
		    for(j=1;j<8;j++){
		    	if(i!=j){
		    			for(twist=1;twist<3;twist++){
		    				for(tarTwist=0;tarTwist<3;tarTwist++){
		    					// console.log(j,i)
		    					twa=LTCT(cuber,[i,j],twist,tarTwist);
		    					
		    					if(typeFilter){
		    						if(twa[2]==typeFilter){
		    							console.log('type filter matches');
		    							LPs=LPs.concat(twa[1]);;
		    							expected_states=expected_states.concat(twa[0].asString());
		    				     		ltctType=ltctType.concat(twa[2]);
		    						}
		    					}else{
		    						LPs=LPs.concat(twa[1]);
		    						expected_states=expected_states.concat(twa[0].asString());
		    						ltctType=ltctType.concat(twa[2]);
		    					    console.log('exception');
		    					}
		    							    				}
		    					
		    		}}}}
        // console.log(cases.map(x=>x[1]))
        // LPs=cases.map(x=>x[1].join(''))
        // expected_states=cases.map(x=>x[0])
        return[LPs,expected_states,ltctType]
	}

	function generatePairs2Flips(cube,buffer){
		LPs=[]
		expected_states=[]
        for(i=0;i<12;i++){
		    for(j=i+1;j<12;j++){
			    // console.log(j,i)
			    fel=sticker_map_rev.edges[0][i]
			    sel=sticker_map_rev.edges[0][j]
			    fel_let= fel=='UF'?"_":letter_stickers_rev.edges.UF[fel]
			    sel_let= sel=='UF'?"_":letter_stickers_rev.edges.UF[sel]
                expected_states=expected_states.concat(edges2flip(cuber,[i,j]).asString())
                LPs=LPs.concat([fel_let,sel_let].join(''))
		    }}
        // console.log(cases.map(x=>x[1]))
        // LPs=cases.map(x=>x[1].join(''))
        // expected_states=cases.map(x=>x[0])
        return[LPs,expected_states]
	}

	function generateAllPairs(el_type,buffer,noEls){
        const rev_let_stick=swap(letter_stickers[el_type][buffer])
        const bufInd=Object.keys(letter_stickers[el_type]).indexOf(buffer)
        const ignoreIndexes=[
        	    sticker_map[el_type][buffer][0]
        	]
        if(bufInd>0){
        	Object.keys(letter_stickers[el_type]).slice(0,bufInd).map(x=>ignoreIndexes.push(sticker_map[el_type][x][0]))
        }
        els=Object.entries(sticker_map[el_type])
        var letters=[]
        for(var fe=0;fe<els.length;fe++){
            if(!(ignoreIndexes.includes(els[fe][1][0]))){
                for(var i=0;i<els.length;i++){
                	if(!(ignoreIndexes.concat(els[fe][1][0]).includes(els[i][1][0]))){
                		if(rev_let_stick[els[fe][0]] === undefined){console.log(els[fe])}
                		                		letters.push([rev_let_stick[els[fe][0]],rev_let_stick[els[i][0]]])}
                	
                }}}
        // console.log(letters,firsttrg)
        return letters.shuffle().slice(0,noEls)
	}

	function onlyUnique(value, index, array) {
	  return array.indexOf(value) === index;
	}

    function generateJSONstorage(){
    	if(localStorage.getItem('Times') === null){
    	    	initJSON={
    	    		"edges BLD":{
    	    			// "UF":{},
    	    			// "UB":{}
    	    		},
    	    		"corners BLD":{
    	    			// "UFR":{},
    	    			// "UBR":{}
    	    		},
    	    		"pairity UFR-x UF-UR":{
    	    			// "A":{}
    	    			// "B":{}
    	    		},
    	    		"corners BLD 3-twists":{
    	    			// "JL":{}
    	    			// "WM":{}
    	    		},
    	    		"edges 2-flips":{
    	    			// "_A":{}
    	    			// "_B":{}
    	    			//...
    	    			// "PF":{}
    	    		},
    	    		"LTCT":{
    	    			// 
    	    		}
    	    	}
    	    	letter_stickers.edges
    	    	/*corners*/
    	    	corners=[]
    	    	cornersJSON={}
    			console.log(letter_stickers.corners);
    	    	var lpc = Object.keys(letter_stickers.corners);
    	    	lpc.map(x=>initJSON["corners BLD"][x]={})
    	    	for( var i=0;i<lpc.length;i++){
    	    		it=i
    	    		letters_c=Object.keys(letter_stickers.corners[lpc[i]])
    	    		for(j=0;j<letters_c.length;j++){
    	    		    corners=corners.concat(generatePairs('corners',lpc[it],letters_c[j]).map(x=>[x[0].join(''),x[1].join('')]).flat())
    	    		}
    	    		console.log(corners)
    	    		corners=corners.filter(onlyUnique)
    	    		corners.map(x=>initJSON["corners BLD"][lpc[it]][x]={"reaction":[],"exec_time":[],"total_time":[],"TPS":[]})
    	    	}
    	    	/*edges*/
    	    	edges=[]
    	    	lpe=Object.keys(letter_stickers.edges)
    	    	lpe.map(x=>initJSON["edges BLD"][x]={})
    	    	for(i=0;i<lpe.length;i++){
    	    		it=i
    	    		letters_e=Object.keys(letter_stickers.edges[lpe[i]])
    	    		for(j=0;j<letters_e.length;j++){
    	    		    edges=edges.concat(generatePairs('edges',lpe[it],letters_e[j]).map(x=>[x[0].join(''),x[1].join('')]).flat())
    	    		}
    	    		edges=edges.filter(onlyUnique)
    	    		edges.map(x=>initJSON["edges BLD"][lpe[it]][x]={"reaction":[],"exec_time":[],"total_time":[],"TPS":[]})
    	    	}
    	    	/*pairity*/
    	    	Object.keys(letter_stickers.corners.UFR).map(x=>initJSON['pairity UFR-x UF-UR'][x]={"reaction":[],"exec_time":[],"total_time":[],"TPS":[]})
    	    	/*corner 3 twists*/
    	    	generatePairs3Twists(cuber,'UFR')[0].map(x=>initJSON['corners BLD 3-twists'][x]={"reaction":[],"exec_time":[],"total_time":[],"TPS":[]})
    	    	/*edges 2 flips*/
    	    	generatePairs2Flips(cube,'UF')[0].map(x=>initJSON['edges 2-flips'][x]={"reaction":[],"exec_time":[],"total_time":[],"TPS":[]})
    	    	/*LTCT*/
    	    	generatePairsLTCT(cuber,'UFR')[0].map(x=>initJSON['LTCT'][x]={"reaction":[],"exec_time":[],"total_time":[],"TPS":[]})
            localStorage.setItem("Times",JSON.stringify(initJSON))
            times=initJSON
    	    }else{
    	    	times=JSON.parse(localStorage.getItem("Times"))
    	    }
    }

    function updateJSONstorage(times){
    	localStorage.setItem("Times",JSON.stringify(times))
    }

    function generateTable(times,pairs,el_type,buf){
    	tableRaw="<table class=\"blueTable\" align=\"left\"><thead><tr><th>LP</th><th>reaction</th><th>time</th><th>TPS</th><th>LAST:</th><th>LPS</th><th>reaction</th><th>time</th><th>TPS</th></tr></thead><tbody>"
    	ptg=pairs.slice().sort()
    	for(var i=0;i<ptg.length;i++){
    		// console.log(times[el_type][buf][ptg[i]])
    		timetmp=times[el_type][buf][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		timer=times[el_type][buf][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		tpstmp=times[el_type][buf][ptg[i]].TPS.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		colourtmp = timetmp=="0.0"?"\"#aaaaaa\"":["0.","1."].includes(timetmp.slice(0,2))?"\"#ffffff\"":timetmp[0]=="2"?"\"#ffffaa\"":"\"#ffaaaa\""
    		colourr = timer=="0.0"?"\"#aaaaaa\"":["0","1"].includes(timer[0])?"\"#ffffff\"":timer[0]=="2"?"\"#ffffaa\"":"\"#ffaaaa\""
            tableRaw+="<tr><td id=\""+ptg[i]+"_name1\">"+ptg[i]+
            "</td><td id=\""+ptg[i]+"_r1\" bgcolor="+colourr+">"+(timer=="0.0"?"NAN":timer)+"</td>"+
            "</td><td id=\""+ptg[i]+"_t1\" bgcolor="+colourtmp+">"+(timetmp=="0.0"?"NAN":timetmp)+"</td>"+
            "</td><td id=\""+ptg[i]+"_tps1\">"+(tpstmp=="0.0"?"NAN":tpstmp)+"</td>"+
            "</td><td bgcolor=\"#999999\"></td>"+
            "<td id=\""+ptg[i]+"_name2\">"+ptg[i]+
            "</td><td id=\""+ptg[i]+"_r2\" bgcolor="+colourr+">"+(times[el_type][buf][ptg[i]].reaction.length==0?"NAN":times[el_type][buf][ptg[i]].reaction.slice(-1)[0].toFixed(1))+"</td>"+
            "</td><td id=\""+ptg[i]+"_t2\" bgcolor="+colourtmp+">"+(times[el_type][buf][ptg[i]].total_time.length==0?"NAN":times[el_type][buf][ptg[i]].total_time.slice(-1)[0].toFixed(1))+"</td>"+
            "</td><td id=\""+ptg[i]+"_tps2\">"+(times[el_type][buf][ptg[i]].TPS.length==0?"NAN":times[el_type][buf][ptg[i]].TPS.slice(-1)[0].toFixed(1))+"</td>"+
            "</tr>"
    	}
    	tableRaw+="</tbody></tr></table>"
    	document.getElementById('tableTimes').innerHTML=tableRaw
    }

    function generateTablePairity(times,pairs=Object.keys(letter_stickers.corners.UFR)){
    	tableRaw="<table class=\"blueTable\" align=\"left\"><thead><tr><th>LP</th><th>reaction</th><th>time</th><th>TPS</th><th>LAST:</th><th>LPS</th><th>reaction</th><th>time</th><th>TPS</th></tr></thead><tbody>"
    	ptg=pairs.slice().sort()
    	for(var i=0;i<ptg.length;i++){
    		// console.log(times["pairity UFR-x UF-UR"][ptg[i]])
    		timetmp=times["pairity UFR-x UF-UR"][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		timer=times["pairity UFR-x UF-UR"][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		tpstmp=times["pairity UFR-x UF-UR"][ptg[i]].TPS.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		colourtmp = timetmp=="0.0"?"\"#aaaaaa\"":["0.","1."].includes(timetmp.slice(0,2))?"\"#ffffff\"":timetmp[0]=="2"?"\"#ffffaa\"":"\"#ffaaaa\""
    		colourr = timer=="0.0"?"\"#aaaaaa\"":["0","1"].includes(timer[0])?"\"#ffffff\"":timer[0]=="2"?"\"#ffffaa\"":"\"#ffaaaa\""
            tableRaw+="<tr><td id=\""+ptg[i]+"_name1\">"+ptg[i]+
            "</td><td id=\""+ptg[i]+"_r1\" bgcolor="+colourr+">"+(timer=="0.0"?"NAN":timer)+"</td>"+
            "</td><td id=\""+ptg[i]+"_t1\" bgcolor="+colourtmp+">"+(timetmp=="0.0"?"NAN":timetmp)+"</td>"+
            "</td><td id=\""+ptg[i]+"_tps1\">"+(tpstmp=="0.0"?"NAN":tpstmp)+"</td>"+
            "</td><td bgcolor=\"#999999\"></td>"+
            "<td id=\""+ptg[i]+"_name2\">"+ptg[i]+
            "</td><td id=\""+ptg[i]+"_r2\" bgcolor="+colourr+">"+(times["pairity UFR-x UF-UR"][ptg[i]].reaction.length==0?"NAN":times["pairity UFR-x UF-UR"][ptg[i]].reaction.slice(-1)[0].toFixed(1))+"</td>"+
            "</td><td id=\""+ptg[i]+"_t2\" bgcolor="+colourtmp+">"+(times["pairity UFR-x UF-UR"][ptg[i]].total_time.length==0?"NAN":times["pairity UFR-x UF-UR"][ptg[i]].total_time.slice(-1)[0].toFixed(1))+"</td>"+
            "</td><td id=\""+ptg[i]+"_tps2\">"+(times["pairity UFR-x UF-UR"][ptg[i]].TPS.length==0?"NAN":times["pairity UFR-x UF-UR"][ptg[i]].TPS.slice(-1)[0].toFixed(1))+"</td>"+
            "</tr>"
    	}
    	tableRaw+="</tbody></tr></table>"
    	document.getElementById('tableTimes').innerHTML=tableRaw
    }

    function generateTableCorner3Twists(times,pairs=generatePairs3Twists(cuber,'UFR')[0]){
    	tableRaw="<table class=\"blueTable\" align=\"left\"><thead><tr><th>LP</th><th>reaction</th><th>time</th><th>TPS</th><th>LAST:</th><th>LPS</th><th>reaction</th><th>time</th><th>TPS</th></tr></thead><tbody>"
    	ptg=pairs.slice().sort()
    	for(var i=0;i<ptg.length;i++){
    		// console.log(times["corners BLD 3-twists"][ptg[i]])
    		timetmp=times["corners BLD 3-twists"][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		timer=times["corners BLD 3-twists"][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		tpstmp=times["corners BLD 3-twists"][ptg[i]].TPS.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		colourtmp = timetmp=="0.0"?"\"#aaaaaa\"":["0.","1."].includes(timetmp.slice(0,2))?"\"#ffffff\"":timetmp[0]=="2"?"\"#ffffaa\"":"\"#ffaaaa\""
    		colourr = timer=="0.0"?"\"#aaaaaa\"":["0","1"].includes(timer[0])?"\"#ffffff\"":timer[0]=="2"?"\"#ffffaa\"":"\"#ffaaaa\""
            tableRaw+="<tr><td id=\""+ptg[i]+"_name1\">"+ptg[i]+
            "</td><td id=\""+ptg[i]+"_r1\" bgcolor="+colourr+">"+(timer=="0.0"?"NAN":timer)+"</td>"+
            "</td><td id=\""+ptg[i]+"_t1\" bgcolor="+colourtmp+">"+(timetmp=="0.0"?"NAN":timetmp)+"</td>"+
            "</td><td id=\""+ptg[i]+"_tps1\">"+(tpstmp=="0.0"?"NAN":tpstmp)+"</td>"+
            "</td><td bgcolor=\"#999999\"></td>"+
            "<td id=\""+ptg[i]+"_name2\">"+ptg[i]+
            "</td><td id=\""+ptg[i]+"_r2\" bgcolor="+colourr+">"+(times["corners BLD 3-twists"][ptg[i]].reaction.length==0?"NAN":times["corners BLD 3-twists"][ptg[i]].reaction.slice(-1)[0].toFixed(1))+"</td>"+
            "</td><td id=\""+ptg[i]+"_t2\" bgcolor="+colourtmp+">"+(times["corners BLD 3-twists"][ptg[i]].total_time.length==0?"NAN":times["corners BLD 3-twists"][ptg[i]].total_time.slice(-1)[0].toFixed(1))+"</td>"+
            "</td><td id=\""+ptg[i]+"_tps2\">"+(times["corners BLD 3-twists"][ptg[i]].TPS.length==0?"NAN":times["corners BLD 3-twists"][ptg[i]].TPS.slice(-1)[0].toFixed(1))+"</td>"+
            "</tr>"
    	}
    	tableRaw+="</tbody></tr></table><label for='secondSelect'>Choose LTCT </label>"+
        '<select id="secondSelect">'+
        '    <option value="">-- wybierz --</option>'+
        '    <option value="UU">UU</option>'+
        '    <option value="UD">UD</option>'+
        '    <option value="DU">DU</option>'+
        '    <option value="DD">DD</option>'+
        '</select>'
    	document.getElementById('tableTimes').innerHTML=tableRaw
    }

    function generateTableLTCT(times,pairs=generatePairsLTCT(cuber,'UFR')){
    	if(document.getElementById("secondSelect") === null){
    		selectRaw="<label for='secondSelect'>Choose LTCT type:</label>"+
        '<select id="secondSelect">'+
        '    <option value="UU">UU</option>'+
        '    <option value="UD">UD</option>'+
        '    <option value="DU">DU</option>'+
        '    <option value="DD">DD</option>'+
        '</select>'
        document.getElementById('LTCT_choose').innerHTML=selectRaw;
    	}
    	const ltctType=document.getElementById("secondSelect") === null? 'UU':document.getElementById("secondSelect").value;
    	
    	tableRaw="<table class=\"blueTable\" align=\"left\"><thead><tr><th>LP</th><th>reaction</th><th>time</th><th>TPS</th><th>LAST:</th><th>LPS</th><th>reaction</th><th>time</th><th>TPS</th></tr></thead><tbody>";
    	// const ltctType=document.getElementById("secondSelect").value;
    	types=pairs[2];
    	console.log(pairs);
    	ptg=pairs[0].slice().filter((x,i)=>types[i]==ltctType).sort();
    	for(var i=0;i<ptg.length;i++){
    		// console.log(times["corners BLD 3-twists"][ptg[i]])
    		timetmp=times["LTCT"][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		timer=times["LTCT"][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		tpstmp=times["LTCT"][ptg[i]].TPS.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		colourtmp = timetmp=="0.0"?"\"#aaaaaa\"":["0.","1."].includes(timetmp.slice(0,2))?"\"#ffffff\"":timetmp[0]=="2"?"\"#ffffaa\"":"\"#ffaaaa\""
    		colourr = timer=="0.0"?"\"#aaaaaa\"":["0","1"].includes(timer[0])?"\"#ffffff\"":timer[0]=="2"?"\"#ffffaa\"":"\"#ffaaaa\""
            tableRaw+="<tr><td id=\""+ptg[i]+"_name1\">"+ptg[i]+
            "</td><td id=\""+ptg[i]+"_r1\" bgcolor="+colourr+">"+(timer=="0.0"?"NAN":timer)+"</td>"+
            "</td><td id=\""+ptg[i]+"_t1\" bgcolor="+colourtmp+">"+(timetmp=="0.0"?"NAN":timetmp)+"</td>"+
            "</td><td id=\""+ptg[i]+"_tps1\">"+(tpstmp=="0.0"?"NAN":tpstmp)+"</td>"+
            "</td><td bgcolor=\"#999999\"></td>"+
            "<td id=\""+ptg[i]+"_name2\">"+ptg[i]+
            "</td><td id=\""+ptg[i]+"_r2\" bgcolor="+colourr+">"+(times["LTCT"][ptg[i]].reaction.length==0?"NAN":times["LTCT"][ptg[i]].reaction.slice(-1)[0].toFixed(1))+"</td>"+
            "</td><td id=\""+ptg[i]+"_t2\" bgcolor="+colourtmp+">"+(times["LTCT"][ptg[i]].total_time.length==0?"NAN":times["LTCT"][ptg[i]].total_time.slice(-1)[0].toFixed(1))+"</td>"+
            "</td><td id=\""+ptg[i]+"_tps2\">"+(times["LTCT"][ptg[i]].TPS.length==0?"NAN":times["LTCT"][ptg[i]].TPS.slice(-1)[0].toFixed(1))+"</td>"+
            "</tr>"
    	}
    	tableRaw+="</tbody></tr></table>"

    	document.getElementById('tableTimes').innerHTML=tableRaw
    	
    }

    function generateTableEdges2Flips(times,pairs=generatePairs2Flips(cuber,'UF')[0]){
    	tableRaw="<table class=\"blueTable\" align=\"left\"><thead><tr><th>LP</th><th>reaction</th><th>time</th><th>TPS</th><th>LAST:</th><th>LPS</th><th>reaction</th><th>time</th><th>TPS</th></tr></thead><tbody>"
    	ptg=pairs.slice().sort()
    	for(var i=0;i<ptg.length;i++){
    		// console.log(times["corners BLD 3-twists"][ptg[i]])
    		timetmp=times["edges 2-flips"][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		timer=times["edges 2-flips"][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		tpstmp=times["edges 2-flips"][ptg[i]].TPS.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		colourtmp = timetmp=="0.0"?"\"#aaaaaa\"":["0.","1."].includes(timetmp.slice(0,2))?"\"#ffffff\"":timetmp[0]=="2"?"\"#ffffaa\"":"\"#ffaaaa\""
    		colourr = timer=="0.0"?"\"#aaaaaa\"":["0","1"].includes(timer[0])?"\"#ffffff\"":timer[0]=="2"?"\"#ffffaa\"":"\"#ffaaaa\""
            tableRaw+="<tr><td id=\""+ptg[i]+"_name1\">"+ptg[i]+
            "</td><td id=\""+ptg[i]+"_r1\" bgcolor="+colourr+">"+(timer=="0.0"?"NAN":timer)+"</td>"+
            "</td><td id=\""+ptg[i]+"_t1\" bgcolor="+colourtmp+">"+(timetmp=="0.0"?"NAN":timetmp)+"</td>"+
            "</td><td id=\""+ptg[i]+"_tps1\">"+(tpstmp=="0.0"?"NAN":tpstmp)+"</td>"+
            "</td><td bgcolor=\"#999999\"></td>"+
            "<td id=\""+ptg[i]+"_name2\">"+ptg[i]+
            "</td><td id=\""+ptg[i]+"_r2\" bgcolor="+colourr+">"+(times["edges 2-flips"][ptg[i]].reaction.length==0?"NAN":times["edges 2-flips"][ptg[i]].reaction.slice(-1)[0].toFixed(1))+"</td>"+
            "</td><td id=\""+ptg[i]+"_t2\" bgcolor="+colourtmp+">"+(times["edges 2-flips"][ptg[i]].total_time.length==0?"NAN":times["edges 2-flips"][ptg[i]].total_time.slice(-1)[0].toFixed(1))+"</td>"+
            "</td><td id=\""+ptg[i]+"_tps2\">"+(times["edges 2-flips"][ptg[i]].TPS.length==0?"NAN":times["edges 2-flips"][ptg[i]].TPS.slice(-1)[0].toFixed(1))+"</td>"+
            "</tr>"
    	}
    	tableRaw+="</tbody></tr></table>"
    	document.getElementById('tableTimes').innerHTML=tableRaw
    }

    function updateTable(times,pairs,el_type,buf){
    	tableRaw="<table class=\"blueTable\" align=\"left\"><thead><tr><th>LP</th><th>reaction</th><th>time</th><th>TPS</th><th>LAST:</th><th>LPS</th><th>reaction</th><th>time</th><th>TPS</th></tr></thead><tbody>"
    	ptg=pairs.slice().sort()

    		
    	for(var i=0;i<ptg.length;i++){
    		timetmp=times[el_type][buf][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		timer=times[el_type][buf][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		
    		document.getElementById(ptg[i]+"_r1").innerHTML  =times[el_type][buf][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_t1").innerHTML  =times[el_type][buf][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_tps1").innerHTML=times[el_type][buf][ptg[i]].TPS.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_r2").innerHTML  =times[el_type][buf][ptg[i]].reaction.length==0?"NAN":times[el_type][buf][ptg[i]].reaction.slice(-1)[0].toFixed(1)
    		document.getElementById(ptg[i]+"_t2").innerHTML  =times[el_type][buf][ptg[i]].total_time.length==0?"NAN":times[el_type][buf][ptg[i]].total_time.slice(-1)[0].toFixed(1)
    		document.getElementById(ptg[i]+"_tps2").innerHTML=times[el_type][buf][ptg[i]].TPS.length==0?"NAN":times[el_type][buf][ptg[i]].TPS.slice(-1)[0].toFixed(1)

    		document.getElementById(ptg[i]+"_r1").setAttribute("bgcolor",timer=="0.0"?"#aaaaaa":["0","1"].includes(timer[0])?"#ffffff":timer[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_t1").setAttribute("bgcolor",timetmp=="0.0"?"#aaaaaa":["0.","1."].includes(timetmp.slice(0,2))?"#ffffff":timetmp[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_r2").setAttribute("bgcolor",timer=="0.0"?"#aaaaaa":["0","1"].includes(timer[0])?"#ffffff":timer[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_t2").setAttribute("bgcolor",timetmp=="0.0"?"#aaaaaa":["0.","1."].includes(timetmp.slice(0,2))?"#ffffff":timetmp[0]=="2"?"#ffffaa":"#ffaaaa")

    	}
    }

    function updateTablePairity(times,pairs=Object.keys(letter_stickers.corners.UFR)){
    	tableRaw="<table class=\"blueTable\" align=\"left\"><thead><tr><th>LP</th><th>reaction</th><th>time</th><th>TPS</th><th>LAST:</th><th>LPS</th><th>reaction</th><th>time</th><th>TPS</th></tr></thead><tbody>"
    	ptg=pairs.slice().sort()

    		
    	for(var i=0;i<ptg.length;i++){
    		timetmp=times["pairity UFR-x UF-UR"][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		timer=times["pairity UFR-x UF-UR"][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		
    		document.getElementById(ptg[i]+"_r1").innerHTML  =times["pairity UFR-x UF-UR"][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_t1").innerHTML  =times["pairity UFR-x UF-UR"][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_tps1").innerHTML=times["pairity UFR-x UF-UR"][ptg[i]].TPS.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_r2").innerHTML  =times["pairity UFR-x UF-UR"][ptg[i]].reaction.length==0?"NAN":times["pairity UFR-x UF-UR"][ptg[i]].reaction.slice(-1)[0].toFixed(1)
    		document.getElementById(ptg[i]+"_t2").innerHTML  =times["pairity UFR-x UF-UR"][ptg[i]].total_time.length==0?"NAN":times["pairity UFR-x UF-UR"][ptg[i]].total_time.slice(-1)[0].toFixed(1)
    		document.getElementById(ptg[i]+"_tps2").innerHTML=times["pairity UFR-x UF-UR"][ptg[i]].TPS.length==0?"NAN":times["pairity UFR-x UF-UR"][ptg[i]].TPS.slice(-1)[0].toFixed(1)

    		document.getElementById(ptg[i]+"_r1").setAttribute("bgcolor",timer=="0.0"?"#aaaaaa":["0","1"].includes(timer[0])?"#ffffff":timer[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_t1").setAttribute("bgcolor",timetmp=="0.0"?"#aaaaaa":["0.","1."].includes(timetmp.slice(0,2))?"#ffffff":timetmp[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_r2").setAttribute("bgcolor",timer=="0.0"?"#aaaaaa":["0","1"].includes(timer[0])?"#ffffff":timer[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_t2").setAttribute("bgcolor",timetmp=="0.0"?"#aaaaaa":["0.","1."].includes(timetmp.slice(0,2))?"#ffffff":timetmp[0]=="2"?"#ffffaa":"#ffaaaa")

    	}
    }

    function updateTableCorners3Twists(times,pairs=generatePairs3Twists(cuber,'UFR')[0]){
    	tableRaw="<table class=\"blueTable\" align=\"left\"><thead><tr><th>LP</th><th>reaction</th><th>time</th><th>TPS</th><th>LAST:</th><th>LPS</th><th>reaction</th><th>time</th><th>TPS</th></tr></thead><tbody>"
    	ptg=pairs.slice().sort()

    		
    	for(var i=0;i<ptg.length;i++){
    		timetmp=times["corners BLD 3-twists"][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		timer=times["corners BLD 3-twists"][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		
    		document.getElementById(ptg[i]+"_r1").innerHTML  =times["corners BLD 3-twists"][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_t1").innerHTML  =times["corners BLD 3-twists"][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_tps1").innerHTML=times["corners BLD 3-twists"][ptg[i]].TPS.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_r2").innerHTML  =times["corners BLD 3-twists"][ptg[i]].reaction.length==0?"NAN":times["corners BLD 3-twists"][ptg[i]].reaction.slice(-1)[0].toFixed(1)
    		document.getElementById(ptg[i]+"_t2").innerHTML  =times["corners BLD 3-twists"][ptg[i]].total_time.length==0?"NAN":times["corners BLD 3-twists"][ptg[i]].total_time.slice(-1)[0].toFixed(1)
    		document.getElementById(ptg[i]+"_tps2").innerHTML=times["corners BLD 3-twists"][ptg[i]].TPS.length==0?"NAN":times["corners BLD 3-twists"][ptg[i]].TPS.slice(-1)[0].toFixed(1)

    		document.getElementById(ptg[i]+"_r1").setAttribute("bgcolor",timer=="0.0"?"#aaaaaa":["0","1"].includes(timer[0])?"#ffffff":timer[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_t1").setAttribute("bgcolor",timetmp=="0.0"?"#aaaaaa":["0.","1."].includes(timetmp.slice(0,2))?"#ffffff":timetmp[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_r2").setAttribute("bgcolor",timer=="0.0"?"#aaaaaa":["0","1"].includes(timer[0])?"#ffffff":timer[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_t2").setAttribute("bgcolor",timetmp=="0.0"?"#aaaaaa":["0.","1."].includes(timetmp.slice(0,2))?"#ffffff":timetmp[0]=="2"?"#ffffaa":"#ffaaaa")

    	}
    }

    function updateTableLTCT(times=times,pairs=generatePairsLTCT(cuber,'UFR')){
    	const typefilter=document.getElementById('secondSelect').value.slice();
        selectRaw="<label for='secondSelect'>Choose LTCT type:</label>"+
        '<select id="secondSelect">'+
        '    <option value="UU">UU</option>'+
        '    <option value="UD">UD</option>'+
        '    <option value="DU">DU</option>'+
        '    <option value="DD">DD</option>'+
        '</select>';
        document.getElementById('LTCT_choose').innerHTML=selectRaw;
    	tableRaw="<table class=\"blueTable\" align=\"left\"><thead><tr><th>LP</th><th>reaction</th><th>time</th><th>TPS</th><th>LAST:</th><th>LPS</th><th>reaction</th><th>time</th><th>TPS</th></tr></thead><tbody>";
    	
    	types=pairs[2];
    	ptg=pairs[0].slice().filter((x,i)=>types[i]==typefilter).sort();


    		
    	for(var i=0;i<ptg.length;i++){
    		timetmp=times["LTCT"][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		timer=times["LTCT"][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		
    		document.getElementById(ptg[i]+"_r1").innerHTML  =times["LTCT"][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_t1").innerHTML  =times["LTCT"][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_tps1").innerHTML=times["LTCT"][ptg[i]].TPS.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_r2").innerHTML  =times["LTCT"][ptg[i]].reaction.length==0?"NAN":times["LTCT"][ptg[i]].reaction.slice(-1)[0].toFixed(1)
    		document.getElementById(ptg[i]+"_t2").innerHTML  =times["LTCT"][ptg[i]].total_time.length==0?"NAN":times["LTCT"][ptg[i]].total_time.slice(-1)[0].toFixed(1)
    		document.getElementById(ptg[i]+"_tps2").innerHTML=times["LTCT"][ptg[i]].TPS.length==0?"NAN":times["LTCT"][ptg[i]].TPS.slice(-1)[0].toFixed(1)

    		document.getElementById(ptg[i]+"_r1").setAttribute("bgcolor",timer=="0.0"?"#aaaaaa":["0","1"].includes(timer[0])?"#ffffff":timer[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_t1").setAttribute("bgcolor",timetmp=="0.0"?"#aaaaaa":["0.","1."].includes(timetmp.slice(0,2))?"#ffffff":timetmp[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_r2").setAttribute("bgcolor",timer=="0.0"?"#aaaaaa":["0","1"].includes(timer[0])?"#ffffff":timer[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_t2").setAttribute("bgcolor",timetmp=="0.0"?"#aaaaaa":["0.","1."].includes(timetmp.slice(0,2))?"#ffffff":timetmp[0]=="2"?"#ffffaa":"#ffaaaa")

    	}
    }

    function updateTableEdges2Flips(times,pairs=generatePairs2Flips(cuber,'UF')[0]){
    	tableRaw="<table class=\"blueTable\" align=\"left\"><thead><tr><th>LP</th><th>reaction</th><th>time</th><th>TPS</th><th>LAST:</th><th>LPS</th><th>reaction</th><th>time</th><th>TPS</th></tr></thead><tbody>"
    	ptg=pairs.slice().sort()

    		
    	for(var i=0;i<ptg.length;i++){
    		timetmp=times["edges 2-flips"][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		timer=times["edges 2-flips"][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		
    		document.getElementById(ptg[i]+"_r1").innerHTML  =times["edges 2-flips"][ptg[i]].total_time.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_t1").innerHTML  =times["edges 2-flips"][ptg[i]].reaction.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_tps1").innerHTML=times["edges 2-flips"][ptg[i]].TPS.slice(-5).reduce((acc,v,i,a) => (acc+v/a.length),0).toFixed(1)
    		document.getElementById(ptg[i]+"_r2").innerHTML  =times["edges 2-flips"][ptg[i]].reaction.length==0?"NAN":times["edges 2-flips"][ptg[i]].reaction.slice(-1)[0].toFixed(1)
    		document.getElementById(ptg[i]+"_t2").innerHTML  =times["edges 2-flips"][ptg[i]].total_time.length==0?"NAN":times["edges 2-flips"][ptg[i]].total_time.slice(-1)[0].toFixed(1)
    		document.getElementById(ptg[i]+"_tps2").innerHTML=times["edges 2-flips"][ptg[i]].TPS.length==0?"NAN":times["edges 2-flips"][ptg[i]].TPS.slice(-1)[0].toFixed(1)

    		document.getElementById(ptg[i]+"_r1").setAttribute("bgcolor",timer=="0.0"?"#aaaaaa":["0","1"].includes(timer[0])?"#ffffff":timer[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_t1").setAttribute("bgcolor",timetmp=="0.0"?"#aaaaaa":["0.","1."].includes(timetmp.slice(0,2))?"#ffffff":timetmp[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_r2").setAttribute("bgcolor",timer=="0.0"?"#aaaaaa":["0","1"].includes(timer[0])?"#ffffff":timer[0]=="2"?"#ffffaa":"#ffaaaa")
			document.getElementById(ptg[i]+"_t2").setAttribute("bgcolor",timetmp=="0.0"?"#aaaaaa":["0.","1."].includes(timetmp.slice(0,2))?"#ffffff":timetmp[0]=="2"?"#ffffaa":"#ffaaaa")

    	}
    }

remap={
	'base':'RUDFLB',
	'x':'RBFULD',
	'x2':'RDUBLF',
	"x'":'RFBDLU',
	'y':'FUDLBR',
	'y2':'LUDBRF',
	"y'":'BUDRFL',
	'z':'DRLFUB',
	'z2':'LDUFRB',
	"z'":'ULRFDB'
}
function removeReorient(alg){
	alg=alg.split(' ')
	firstMoves=alg.map(x=>x[0])
	if(firstMoves.includes('x') || firstMoves.includes('y') || firstMoves.includes('z')){
        orientations=Object.keys(remap).slice(1)
        
        /*dummy init*/
        // latestInd=0
        do{    
        	    indArr=orientations.map(x=>alg.lastIndexOf(x))
                // for(i=0;i<orientations.length;i++){
                //     indArr=indArr.concat(alg.lastIndexOf(orientations[i]))
                //     // console.log(alg.lastIndexOf(orientations[i]))
                // }
                latestInd=indArr.reduce((x,y)=>Math.max(x,y))
                if(latestInd>-1){
                	// alg=alg.map((v,i)=>function(v,i){res='';if(i>latestInd){res=remap[alg[latestInd]][remap.base.indexOf(v[0])]+v[1]===undefined?"":v[1]}else{res=v};return(res)})
                	if(latestInd<(alg.length-1)){
                	                	for(j=(latestInd+1);j<alg.length;j++){
                	                		alg[j]=remap.base[remap[alg[latestInd]].indexOf(alg[j][0])]+(alg[j][1]===undefined?'':alg[j][1])
                	                	}}
                	alg.splice(latestInd,1)
                	if(alg.map(x=>(x[0]=='x' || x[0]=='y' || x[0]=='z')?1:0).reduce((x,y)=>x+y) == 0){return(alg)}
                }}while(latestInd>-1)
	}
	return(alg)
}

remap_wide_moves={
	'Rw':['x','L'],
	'Rw2':['x2','L2'],
	"Rw'":["x'","L'"],
	'Lw':["x'",'R'],
	'Lw2':['x2','R2'],
	"Lw'":["x","R'"],
	'Uw':['y','D'],
	'Uw2':['y2','D2'],
	"Uw'":["y'","D'"],
	'Dw':['y','U'],
	'Dw2':['y2','U2'],
	"Dw'":["y'","U'"],
	'Fw':["z'",'B'],
	'Fw2':['z2','B2'],
	"Fw'":["z","B'"],
	'Bw':["z'",'F'],
	'Bw2':['z2','F2'],
	"Bw'":["z","F'"],
	'r':['x','L'],
	'r2':['x2','L2'],
	"r'":["x'","L'"],
	'l':["x'",'R'],
	'l2':['x2','R2'],
	"l'":["x","R'"],
	'u':['y','D'],
	'u2':['y2','D2'],
	"u'":["y'","D'"],
	'd':['y','U'],
	'd2':['y2','U2'],
	"d'":["y'","U'"],
	'f':["z'",'B'],
	'f2':['z2','B2'],
	"f'":["z","B'"],
	'b':["z'",'F'],
	'b2':['z2','F2'],
	"b'":["z","F'"],
	'M':["x'","L'","R"],
	'M2':["x2","L2","R2"],
	"M'":["x","L","R'"],
	'E':["y'","U","D'"],
	'E2':["y2","D2","U2"],
	"E'":["y","U'","D"],
	'S':["z","B","F'"],
	'S2':["z2","F2","B2"],
	"S'":["z'","B'","F"]
}
function wideMovesConvert(alg){
	alg=alg.split(' ')
	cleanAlg=alg.map(x=>(Object.keys(remap_wide_moves).indexOf(x)==-1?x:(remap_wide_moves[x]))).flat()
	return(cleanAlg)
}

function convertToRaw(alg){
	alg=wideMovesConvert(alg).join(' ')
	alg=removeReorient(alg).join(' ')
	return(alg)
}

sliceIndex={
	'U':1,
	'D':1,
	'R':2,
	'L':2,
	'F':3,
	'B':3
}

    function sortAlg(alg){
    	i=0
    	algtmp=alg.slice()
		do{
			currSlice=sliceIndex[algtmp[i][0]]
			movesToReorder=[]
			// console.log(currSlice, sliceIndex[algtmp[i+1][0]])
			if(i<(algtmp.length-1) && currSlice==sliceIndex[algtmp[i+1][0]]){
				j=i+1
				movesToReorder=movesToReorder.concat(algtmp[i])
				do{
					movesToReorder=movesToReorder.concat(algtmp[j])
					j=j+1
				}while(j<(algtmp.length-1) && currSlice==sliceIndex[algtmp[j][0]])
				movesToReorder.sort()
				for(k=i;k<(movesToReorder.length+i);k++){
					algtmp[k]=movesToReorder[k-i]
				}
				i=j
			}else{i++}
		}while(i<algtmp.length)
        return(algtmp)
    }

	function findCancelations(alg1,alg2){
		alg1=sortAlg(convertToRaw(alg1).split(' '))
		alg2=sortAlg(convertToRaw(alg2).split(' '))
		// reorder algs
		console.log(alg1,alg2)
		alg2Rev=invAlg(alg1)
		console.log(alg2Rev)
		/*if at minimum one move cancels*/
    		if(alg1.slice(-1)[0][0] == alg2[0][0]){
    			// console.log('cancels')
    			/*check how many moves exactly cancels*/
    			console.log(alg2Rev.map((v,i)=>v==alg2[i]).indexOf(false))
    			cancCount=alg2Rev.map((v,i)=>v==alg2[i]).indexOf(false)
    			cancOneCount=alg2Rev.map((v,i)=>v[0]==(i<alg2.length?alg2[i][0]:""))[cancCount]*1
    			// console.log(cancCount)
    			return(cancOneCount+cancCount*2)
    			console.log(cancOneCount+cancCount*2 + " moves canceled\n")
    		}
        // if(sliceIndex[firstMoveSecondAlg[0]] == sliceIndex[lastMoveFirstAlg] ){
        // 	/*check all possible pairs*/
        // 	if()
        // }
	}

globalCancels=[]
function find_cancel_moves_alg(algInd,algList,pairList,printShortest=false,appendToGlobal=true){
	alg=convertToRaw(algList[algInd])
    letters=pairList[algInd]
    /*corners hardcoded letters exclusion for second alg*/
    excludeLetters=[
    	letter_stickers_rev.corners.UFR[sticker_map_rev.corners[0][sticker_map.corners[letter_stickers.corners.UFR[pairList[algInd][0]]][0]]],
    	letter_stickers_rev.corners.UFR[sticker_map_rev.corners[1][sticker_map.corners[letter_stickers.corners.UFR[pairList[algInd][0]]][0]]],
    	letter_stickers_rev.corners.UFR[sticker_map_rev.corners[2][sticker_map.corners[letter_stickers.corners.UFR[pairList[algInd][0]]][0]]],
    	letter_stickers_rev.corners.UFR[sticker_map_rev.corners[0][sticker_map.corners[letter_stickers.corners.UFR[pairList[algInd][1]]][0]]],
    	letter_stickers_rev.corners.UFR[sticker_map_rev.corners[1][sticker_map.corners[letter_stickers.corners.UFR[pairList[algInd][1]]][0]]],
    	letter_stickers_rev.corners.UFR[sticker_map_rev.corners[2][sticker_map.corners[letter_stickers.corners.UFR[pairList[algInd][1]]][0]]]]
    // console.log(excludeLetters)
    var possibleAlgs=[]
    // console.log(excludeLetters.join(''))
    algList.forEach(function(x,index){
    	x_=convertToRaw(x)
    	lprs=pairList[index].split('')
    	/*completely different pair, can be manipulated manually*/
    	if(!(excludeLetters.includes(lprs[0]) || excludeLetters.includes(lprs[1]))){
    	// if(!((excludeLetters.includes(lprs[0]) && excludeLetters.includes(lprs[1] )|| lprs[0]==letters[1]))){
    		// console.log('possible pair, move ',alg.split(' ').slice(-1)[0][0],' ',x.split(' ')[0][0])
    		/*if at minimum one move cancels*/
    		if(alg.split(' ').slice(-1)[0][0] == x_.split(' ')[0][0]){
    			// console.log('cancels')
    			/*check how many moves exactly cancels*/
    			tmpalg=invAlg(alg.split(' '))
    			// console.log(tmpalg,x.split(' '),tmpalg.map((v,i)=>v!=x.split(' ')[i]))
    			cancCount=tmpalg.map((v,i)=>v==x_.split(' ')[i]).indexOf(false)
    			// console.log(cancCount)
    			// console.log(x.split(' '),tmpalg)
    			cancOneCount=tmpalg.slice(0,Math.min(tmpalg.length,x_.split(' ').length)-1).map((v,i)=>v[0]==x_.split(' ')[i][0])[cancCount]*1
    			// console.log(pairList[algInd]," cancels with ",pairList[index]," by ", 1+cancCount*2," moves\n",algList[algInd],' + ',algList[index])
    			possibleAlgs=possibleAlgs.concat(index)
    			/*USE BELOW TO FIND ALL CANCELS*/
    			// globalCancels=globalCancels.concat([[pairList[algInd],pairList[index],cancOneCount+cancCount*2]])
    			// console.log('concat', index)
    			if(printShortest){
    				if(cancCount>0){console.log(pairList[algInd]," cancels with ",pairList[index]," by ", 1+cancCount*2," moves\n",algList[algInd],' + ',algList[index])}
    			}
    		}
    	}
    })
    next=possibleAlgs[Math.floor(Math.random()*possibleAlgs.length)]
    globalCancels=globalCancels.concat([[pairList[algInd],pairList[next]]])
    console.log(pairList[algInd])
    // console.log(possibleAlgs)
    return(next)
}

ind=99
for(i=0;i++;i<10){
    ind=find_cancel_moves_alg(ind,calgs,cnms)
}
