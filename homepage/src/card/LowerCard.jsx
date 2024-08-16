import React from 'react'

export default function LowerCard() {
  
  const list = [{
    link:'https://imgs.search.brave.com/S5xajZA1szTFkhqBDe_w4G4J4EoUwsIB4kmjic-VFew/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvb3JhbmdlLWZy/dWl0LTd3dmx3cDBr/dTlpZXA5MjIuanBn',
    name:'Oranges',
    item:26
  },{
    link:'https://imgs.search.brave.com/BkJjPsE0kiyfnnkgW3dQAtW8rC_Wz7bnW-S_YikF3CA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oZWFs/dGhqYWRlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8x/MC9hcHBsZS1mcnVp/dC5qcGc',
    name:'Apple',
    item:26
  },{
    link:'https://imgs.search.brave.com/Dh1OH5Q9O1fzjeaR6iRWnXsRrFe04_O-hbrOec6O75I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hcGku/dGltZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMTEv/Z2V0dHlpbWFnZXMt/NDU5NzYxOTQ4Lmpw/Zz9xdWFsaXR5PTg1/Jnc9MjQwMA',
    name:'Banana',
    item:26
  },{
    link:'https://imgs.search.brave.com/Dh1OH5Q9O1fzjeaR6iRWnXsRrFe04_O-hbrOec6O75I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hcGku/dGltZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMTEv/Z2V0dHlpbWFnZXMt/NDU5NzYxOTQ4Lmpw/Zz9xdWFsaXR5PTg1/Jnc9MjQwMA',
    name:'Cucumber',
    item:26
  },{
    link:'https://imgs.search.brave.com/WV16vwW2o1wlLhGtWvEi7-_yHSl3Jm-OL4-LaozxXHY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcy/NDcyNjYyL3Bob3Rv/L2Jyb2Njb2xpLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1o/VjVmX21rZ1dZYmdN/UU9fd1hUUlR0TU5l/QkZxdE1kRWhZSUdj/Q1hzQUtRPQ',
    name:'Broccli',
    item:26
  },{
    link:'https://imgs.search.brave.com/f2dlXtMT9wcD2IMWC7_H5V8UHqOTT_b2Q1y8yXqeE94/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjQ4/NzQyNDE4L3Bob3Rv/L2JvdHRsZS1nb3Vy/ZHMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTFFc3RnYWNk/LU0tSEpVdjhScFJo/SGxuNEZTd0d4aUtO/blJ0TFlKQ1ZjSGs9',
    name:'Bottlegourd',
    item:26
  },{
    link:'https://imgs.search.brave.com/Yd2slJgSZKTwJv7M381nqpoAjno1XNNPHFkgw9oMHJs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDUy/MzUyMjMxL3Bob3Rv/L3BpbmVhcHBsZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/QmlvRHdTZEJQTWxD/cGM1NjM4OXk5SlVz/QUpGR1hrazVncjE0/UjRoeGlrWT0',
    name:'Pineapple',
    item:26
  },{
    link:'https://imgs.search.brave.com/ix1nUrBfXV2ZIGQBOZFJ5odYBlo3IBjVVcV2FHMIKoM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzgwLzk2LzE3/LzM2MF9GXzgwOTYx/NzM5X2hlcDFVWmFR/UnN5NVdRT1lVM2pr/T3I1Q0I3QTZ4YzNV/LmpwZw',
    name:'Carrot',
    item:26
  },]
  
  return (
    <>
    <div className=' flex mt-8 p-2 '>
    {list.map((e,i)=>{
      return (
        <>
        <div className='flex flex-col text-center rounded bg-pink-200 p-2 w-[100px] border-[1px] border-black'>
      <div className='flex justify-center border-[1px] border-black'><img className=' w-[80px] h-[50px]' src={list[i].link} alt="" /></div>
      <div className='align-middle text-green-500 font-semibold'>{list[i].name}</div>
      <div className='align-middle'>{list[i].item} units</div>
    </div>
        </>
      )
    })}
    </div>
    </>
  )
}
