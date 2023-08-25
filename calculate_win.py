import sys, math

input_prompts=[]
for a in range(10):
    input_prompts+=[('you' if (a%2) == 0 else 'enemy') + (' %i: ' % (math.floor(a/2)+1))]


while 1:
    you=[]
    enemy=[]
    enemy_name= input('enemy name?: ')
    for prompt in input_prompts:
        if prompt[-3] == '5':
            your_range=[(sum(you)-max(you))/3,(sum(you)-min(you))/3]
            enemy_range=[(sum(enemy)-max(enemy))/3,(sum(enemy)-min(enemy))/3]
            print('your possible range:(%0.3f, %0.3f)' % tuple(your_range))
            print('enemy possible range:(%0.3f, %0.3f)' % tuple(enemy_range))
        if prompt[0] == 'y':
            you+=[float(input(prompt).replace(',','.'))]
        else:
            enemy+=[float(input(prompt).replace(',','.'))]
    with open('bots.csv','a') as f:
        for x in enemy:
            f.write(enemy_name+';'+str(x)+'\n')
        #calculation before last solve
    