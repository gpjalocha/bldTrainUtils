 /*EDGES TRAIN MARATHON*/
                if((buttonEdgesM.innerText == "BLD edges train in progress...") & (status_train==0)){
                  count=mvcnt
                  st=Date.now();
                  st_reaction=Date.now();
                  copy_cube(acjs_cube['kostka'],solved_cube);
                  expected_state=expected_states[alg_no]
                  // document.getElementById("tmpsaver").innerHTML=expected_state.join(' ');
                  status_train=1;
                  document.getElementById("tmpsaver").innerHTML = "<p style=\"font-size:14px; \">" +pairsTable[alg_no]+ "</p>"
                }
                if((buttonEdgesM.innerText == 'BLD edges train in progress...') & (status_train==1)){
                    en=Date.now();
                    if(mvcnt==count){st_reaction=Date.now();}
                    if(convertAcjs(acjs_cube['kostka']) == expected_state){
                      times['edges BLD'][active_buf][pairs[alg_no]].reaction.push(Math.round((st_reaction-st),2)/1000)
                      times['edges BLD'][active_buf][pairs[alg_no]].exec_time.push(Math.round((en-st_reaction),2)/1000)
                      times['edges BLD'][active_buf][pairs[alg_no]].total_time.push(Math.round((en-st),2)/1000)
                      times['edges BLD'][active_buf][pairs[alg_no]].TPS.push((mvcnt-count)/(Math.round((en-st_reaction),2)/1000))
                      lastone=alg_no;
                      if(((en-st)/1000)>4){document.getElementById("tmpsaverbad").innerHTML+=lastone+";"}
                      alg_no=alg_no+1;
                      status_train=0;
                      console.log('next alg')}
                      if((alg_no+1)>(expected_states.length)){
                         alg_no=0;
                         if(document.getElementById("tmpsaverbad").innerHTML.length>0){
                          expected_states=document.getElementById("tmpsaverbad").innerHTML.slice(0,-1).split(';').map(x=>expected_states[parseInt(x)]);
                          pairsTable=document.getElementById("tmpsaverbad").innerHTML.slice(0,-1).split(';').map(x=>pairsTable[parseInt(x)]);
                          // console.log("repeating algs("+String(document.getElementById("tmpsaverbad").slice(0,-1).split(';').innerHTML.length)+" cases)");
                          document.getElementById("tmpsaverbad").innerHTML='';
                          document.getElementById("tmpsaver").innerHTML=''
                        }else{
                                                 updateButtonEdgesM();}
                      status_train=0;
                      document.getElementById("log").innerHTML = String(Math.round((en-st),2)/1000)+ "<br>"
                      updateJSONstorage(times)
                    }
                  }
                   /*Corners TRAIN*/
                if((buttonCorners.innerText == "BLD corners train in progress...") & (status_train==0)){
                  count=mvcnt
                  st=Date.now();
                  st_reaction=Date.now();
                  copy_cube(acjs_cube['kostka'],solved_cube);
                  expected_state=expected_states[alg_no]
                  status_train=1;
                  document.getElementById("tmpsaver").innerHTML = "<p style=\"font-size:14px; \">" +pairsTable[alg_no]+ "</p>"
                }
                if((buttonCorners.innerText == 'BLD corners train in progress...') & (status_train==1)){
                    en=Date.now();
                    if(mvcnt==count){st_reaction=Date.now();}
                    if(convertAcjs(acjs_cube['kostka']) == expected_state){
                      times['corners BLD'][active_buf][pairsTable[alg_no]].reaction.push(Math.round((st_reaction-st),2)/1000)
                      times['corners BLD'][active_buf][pairsTable[alg_no]].exec_time.push(Math.round((en-st_reaction),2)/1000)
                      times['corners BLD'][active_buf][pairsTable[alg_no]].total_time.push(Math.round((en-st),2)/1000)
                      times['corners BLD'][active_buf][pairsTable[alg_no]].TPS.push((mvcnt-count)/(Math.round((en-st_reaction),2)/1000))
                      alg_no=alg_no+1;
                      console.log('next alg')
                      if((alg_no+1)>(expected_states.length)){
                         alg_no=0;
                         updateButtonCorners();
                         }
                      status_train=0;
                      document.getElementById("log").innerHTML = String(Math.round((en-st),2)/1000)+ "<br>"
                      updateJSONstorage(times)
                    }
                  }