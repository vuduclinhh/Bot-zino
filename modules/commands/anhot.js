/**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "anhot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "Random Ảnh Hot Tw",
  commandCategory: "Random-IMG",
  usages: "tw",
  cooldowns: 1,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/gzqeyE8.jpg",
"https://i.imgur.com/R6IANqE.jpg",
"https://i.imgur.com/8bnuchD.jpg",
"https://i.imgur.com/YiX4yS9.jpg",
"https://i.imgur.com/8IUaxtx.jpg",
"https://i.imgur.com/YOZumYn.jpg",
"https://i.imgur.com/L2emsEt.jpg",
"https://i.imgur.com/EJbGaqx.jpg",
"https://i.imgur.com/nq2y7ym.jpg",
"https://i.imgur.com/yRBuo11.jpg",
 "https://i.imgur.com/NlxnQ59.jpg",
 "https://i.imgur.com/epTOxm6.jpg",
 "https://i.imgur.com/XcIRZLC.jpg",
 "https://i.imgur.com/TmGWPiL.jpg",
 "https://i.imgur.com/0eCIMV0.jpg",
 "https://i.imgur.com/TfCkg8u.jpg",
 "https://i.imgur.com/Dq6wWir.jpg",
 "https://i.imgur.com/tIv21bm.jpg",
 "https://i.imgur.com/ihMwIEt.jpg",
 "https://i.imgur.com/ZnOET7L.jpg",
 "https://i.imgur.com/FUqt1tH.jpg",
 "https://i.imgur.com/Ye3kd1w.jpg",
 "https://i.imgur.com/Ye3kd1w.jpg",
 "https://i.imgur.com/JrQFys8.jpg",
 "https://i.imgur.com/CcjNaLN.jpg",
 "https://i.imgur.com/LP8T3mQ.jpg",
 "https://i.imgur.com/iZowivb.jpg",
 "https://i.imgur.com/lnxKJq3.jpg",
 "https://i.imgur.com/umAtpfL.jpg",
 "https://i.imgur.com/lHcNHpO.jpg",
 "https://i.imgur.com/rPtPNwO.jpg",
 "https://i.imgur.com/tK5LfDo.jpg",
 "https://i.imgur.com/7Gwdck8.jpg",
 "https://i.imgur.com/shKHJA1.jpg",
 "https://i.imgur.com/WDkUJ3W.jpg",
 "https://i.imgur.com/qdpAz9D.jpg",
 "https://i.imgur.com/pN0MQq0.jpg",
 "https://i.imgur.com/jCbIrvf.jpg",
 "https://i.imgur.com/D4da2RD.jpg",
 "https://i.imgur.com/D4da2RD.jpg",
 "https://i.imgur.com/mJQg7uj.jpg",
 "https://i.imgur.com/B1DoMjW.jpg",
 "https://i.imgur.com/q0IlBCJ.jpg",
 "https://i.imgur.com/7hDj4L4.jpg",
 "https://i.imgur.com/Re9AsfE.jpg",
 "https://i.imgur.com/CpbKXNb.jpg",
 "https://i.imgur.com/X2BmpO3.jpg",
 "https://i.imgur.com/ENhF9SY.jpg",
 "https://i.imgur.com/4nB8n51.jpg",
 "https://i.imgur.com/m2wKvRA.jpg",
 "https://i.imgur.com/94rTn2J.jpg",
 "https://i.imgur.com/p4PFHFv.jpg",
 "https://i.imgur.com/jXpS8gy.jpg",
 "https://i.imgur.com/2JG2N7E.jpg",
 "https://i.imgur.com/vpXTclR.jpg",
 "https://i.imgur.com/JtTFWxM.jpg",
 "https://i.imgur.com/Ei6pnbi.jpg",
 "https://i.imgur.com/flxVpyd.jpg",
 "https://i.imgur.com/bGWUZKF.jpg",
 "https://i.imgur.com/vWdKqGD.jpg",
 "https://i.imgur.com/kGw8EBS.jpg",
 "https://i.imgur.com/jIr8RX2.jpg",
 "https://i.imgur.com/AOFNeLA.jpg",
 "https://i.imgur.com/dGAost4.jpg",
 "https://i.imgur.com/uLknKoJ.jpg",
 "https://i.imgur.com/RXP9628.jpg",
 "https://i.imgur.com/UQHsdPU.jpg",
 "https://i.imgur.com/aJqkHbN.jpg",
 "https://i.imgur.com/oKg3RlD.jpg",
 "https://i.imgur.com/ZUG1cGv.jpg",
 "https://i.imgur.com/pFkJoGW.jpg",
 "https://i.imgur.com/ovfmT5W.jpg",
 "https://i.imgur.com/vrVWU0V.jpg",
"https://i.pixxxels.cc/fRcshBs0/0Ek96Eb.jpg",
"https://i.pixxxels.cc/y6cS2C51/0H7e1Yk.jpg",
"https://i.pixxxels.cc/FR1XcGQ1/0hynUWv.jpg",
"https://i.pixxxels.cc/d3jfxSrq/0ipEeZL.jpg",
"https://i.pixxxels.cc/zv2m0cT9/0REJqMK.jpg",
"https://i.pixxxels.cc/4xC2sG4W/1CCdRsB.jpg",
"https://i.pixxxels.cc/s2NNFrtD/1gPboa8.jpg",
"https://i.pixxxels.cc/7PtYBsPH/1ySq4oy.jpg",
"https://i.pixxxels.cc/sDjqZw9z/1yvLtzb.jpg",
"https://i.pixxxels.cc/SNkVvRJf/2lgJxTU.jpg",
"https://i.pixxxels.cc/85WQtcjV/3377I05.jpg",
"https://i.pixxxels.cc/J0k32yXM/3ayfc27.jpg",
"https://i.pixxxels.cc/yYCY44HP/3ceJd1l.jpg",
"https://i.pixxxels.cc/SKHb6CQr/3CKekkj.jpg",
"https://i.pixxxels.cc/NFc8ZskX/3gCHyCV.jpg",
"https://i.pixxxels.cc/rmtt8Bw9/3kuKd25.jpg",
"https://i.pixxxels.cc/Pr09JZyz/3qkXSrx.jpg",
"https://i.pixxxels.cc/sgf6vxzg/4076pBX.jpg",
"https://i.pixxxels.cc/Dyqf22dZ/4IQtzTF.jpg",
"https://i.pixxxels.cc/NjRVrS9d/4ManjwL.jpg",
"https://i.pixxxels.cc/jjCrJKNy/4Q9nJg8.jpg",
"https://i.pixxxels.cc/mkNjrf69/4s4twnf.jpg",
"https://i.pixxxels.cc/qRLgMpdy/4ZqHSsx.jpg",
"https://i.pixxxels.cc/zfx9JQc3/54vJsPs.jpg",
"https://i.pixxxels.cc/3rsQ4gfJ/56NeszE.jpg",
"https://i.pixxxels.cc/4dr2yRb4/5fIBnyj.jpg",
"https://i.pixxxels.cc/Dy4p90hW/5k7qLw2.jpg",
"https://i.pixxxels.cc/zGjQjM5p/5VBTcfZ.jpg",
"https://i.pixxxels.cc/V6jn9yPk/5wyn0Zx.jpg",
"https://i.pixxxels.cc/d1KJyp96/5YmF0Ak.jpg",
"https://i.pixxxels.cc/sXvDy7wd/5zJF0md.jpg",
"https://i.pixxxels.cc/g0zx9935/64LK5Su.jpg",
"https://i.pixxxels.cc/Y26T0jVJ/6dgfKaR.jpg",
"https://i.pixxxels.cc/V6h4hW0S/6EpQ4We.jpg",
"https://i.pixxxels.cc/x1JkyrKV/6sVu8D9.jpg",
"https://i.pixxxels.cc/rF4ghHGx/6t2rYXx.jpg",
"https://i.pixxxels.cc/7Y1PqsPy/6yrPr3H.jpg",
"https://i.pixxxels.cc/PJccmkQR/6zj3Fu3.jpg",
"https://i.pixxxels.cc/fbgDHkZH/717REsw.jpg",
"https://i.pixxxels.cc/C5BZvjbx/752bShh.jpg",
"https://i.pixxxels.cc/qRrCvhfm/7btwsxL.jpg",
"https://i.pixxxels.cc/c4fCr1m2/7Crmr5p.jpg",
"https://i.pixxxels.cc/66MTk6cN/7fzAyvR.jpg",
"https://i.pixxxels.cc/Z5kYmkzH/7I3zlQA.jpg",
"https://i.pixxxels.cc/66cGBf9g/7j3vPpZ.jpg",
"https://i.pixxxels.cc/bvz6SJjv/7qoku60.jpg",
"https://i.pixxxels.cc/FK8DWxLY/8EHKWtM.jpg",
"https://i.pixxxels.cc/YS6hZr4Q/8fin6Ez.jpg",
"https://i.pixxxels.cc/bJG1ZG3k/8IOKCle.jpg",
"https://i.pixxxels.cc/sXH0rRqg/8yOHWDU.jpg",
"https://i.pixxxels.cc/PJgHdD9J/97L7622.jpg",
"https://i.pixxxels.cc/V6H4TQHB/9F5wHXc.jpg",
"https://i.pixxxels.cc/KYJ0P2ZD/9K5ostn.jpg",
"https://i.pixxxels.cc/pVKMjs9c/a25XjTa.jpg",
"https://i.pixxxels.cc/ncTKwtjs/a7Kg4Pl.jpg",
"https://i.pixxxels.cc/V64ByBS9/AAPzuIp.jpg",
"https://i.pixxxels.cc/43vxBXyq/acecRJK.jpg",
"https://i.pixxxels.cc/8z68mwc0/ae7mUnO.jpg",
"https://i.pixxxels.cc/grFszcDm/AgtGnxG.jpg",
"https://i.pixxxels.cc/C537hC0R/aH8z05E.jpg",
"https://i.pixxxels.cc/VkQwT2x8/AlI84GD.jpg",
"https://i.pixxxels.cc/VLBwxKm0/alJcsri.jpg",
"https://i.pixxxels.cc/GpfynLd2/APbXFg3.jpg",
"https://i.pixxxels.cc/tCmZxRnz/aPCFesX.jpg",
"https://i.pixxxels.cc/CKhgMSPG/BDC2SUA.jpg",
"https://i.pixxxels.cc/C1qTmNc1/BdvOm5c.jpg",
"https://i.pixxxels.cc/GpCpkWMt/BEQGTNZ.jpg",
"https://i.pixxxels.cc/6pVjQZgS/bONuQNt.jpg",
"https://i.pixxxels.cc/g2CxgMDX/BsHDn7q.jpg",
"https://i.pixxxels.cc/SRY01GVR/BWsSKS7.jpg",
"https://i.pixxxels.cc/XNmBrz0G/Byfd5eR.jpg",
"https://i.pixxxels.cc/kgp4BTZY/c0fNl62.jpg",
"https://i.pixxxels.cc/dQ6JhWZR/caiQcHI.jpg",
"https://i.pixxxels.cc/j5NLVyMg/CASKRkK.jpg",
"https://i.pixxxels.cc/LsKVjsKP/CdBIgEA.jpg",
"https://i.pixxxels.cc/W4yXYcym/Cjd58oD.jpg",
"https://i.pixxxels.cc/28vR42VX/cjxCcIH.jpg",
"https://i.pixxxels.cc/6QkF2Kzb/CMpkbbl.jpg",
"https://i.pixxxels.cc/hjGcscVD/Colozom.jpg",
"https://i.pixxxels.cc/4NHtwT1Q/coYJ57u.jpg",
"https://i.pixxxels.cc/8CZbJgDQ/csuoJLr.jpg",
"https://i.pixxxels.cc/6qvsb3qX/CX7RvYk.jpg",
"https://i.pixxxels.cc/0y1XxnWD/d42f988.jpg",
"https://i.pixxxels.cc/gj2jx1Y5/D8zfRUN.jpg",
"https://i.pixxxels.cc/VsG3y2bh/dC9Umeq.jpg",
"https://i.pixxxels.cc/pdhBFn6R/dFTjzmx.jpg",
"https://i.pixxxels.cc/Y2njJySD/DjILn8K.jpg",
"https://i.pixxxels.cc/7YntH7pR/djlhHdh.jpg",
"https://i.pixxxels.cc/nrJ5TtsR/dJyLYrx.jpg",
"https://i.pixxxels.cc/bYDsf92z/dN2HRca.jpg",
"https://i.pixxxels.cc/0QrhrCTn/e0Vxsc0.jpg",
"https://i.pixxxels.cc/3JWWYMf0/E26RvXw.jpg",
"https://i.pixxxels.cc/yYqY4JRt/E3dBYoL.jpg",
"https://i.pixxxels.cc/bvDKwr02/e8GX8QZ.jpg",
"https://i.pixxxels.cc/B6wswkCx/EC3taCC.jpg",
"https://i.pixxxels.cc/jdK04yPx/eomZ7yU.jpg",
"https://i.pixxxels.cc/T1Jj6zt4/etPpFky.jpg",
"https://i.pixxxels.cc/7h7cMWtP/Ev0fVPS.jpg",
"https://i.pixxxels.cc/Jn4MxJ9H/eVlDNTN.jpg",
"https://i.pixxxels.cc/GmYNy2S0/F0WXUry.jpg",
"https://i.pixxxels.cc/C5RYT0MF/Fa41kiT.jpg",
"https://i.pixxxels.cc/rwNp98Kb/fApOWjh.jpg",
"https://i.pixxxels.cc/4NhZWXFP/fDNAoEO.jpg",
"https://i.pixxxels.cc/wB4TS1qy/Fgw2LMH.jpg",
"https://i.pixxxels.cc/MKnXxbM6/FHDTgiw.jpg",
"https://i.pixxxels.cc/X753Q2BC/FPU7ooz.jpg",
"https://i.pixxxels.cc/9MXNKBXV/fwNxE8p.jpg",
"https://i.pixxxels.cc/8CP2Qwcw/fWTlvMb.jpg",
"https://i.pixxxels.cc/s2jkCzKt/G4AippI.jpg",
"https://i.pixxxels.cc/65xCQpR4/g9kTmQh.jpg",
"https://i.pixxxels.cc/Z5jQc3HN/GArIgCr.jpg",
"https://i.pixxxels.cc/5yMp1Np1/GCXMhiX.jpg",
"https://i.pixxxels.cc/nhkLGdN1/GFJr9xP.jpg",
"https://i.pixxxels.cc/x8tsRVy2/gHsFqMT.jpg",
"https://i.pixxxels.cc/T2gfc7DW/giS88xE.jpg",
"https://i.pixxxels.cc/q7NG3Z7N/gnHexds.jpg",
"https://i.pixxxels.cc/CMGp8R3G/GP2gRKg.jpg",
"https://i.pixxxels.cc/D0k4mxW3/GP63U1V.jpg",
"https://i.pixxxels.cc/hPZyQgt8/Gs9We5w.jpg",
"https://i.pixxxels.cc/R0pcC1Qv/GsYk6c1.jpg",
"https://i.pixxxels.cc/C1HnBjbZ/GTwlKZ7.jpg",
"https://i.pixxxels.cc/VNJJRxnc/gXzSBwr.jpg",
"https://i.pixxxels.cc/rpJPf49W/H6zJJCq.jpg",
"https://i.pixxxels.cc/HLbVRQZS/hAH9klr.jpg",
"https://i.pixxxels.cc/VvZ6n4vN/HBYFOiv.jpg",
"https://i.pixxxels.cc/QNkvtR7S/HE9hISR.jpg",
"https://i.pixxxels.cc/xC7DPH05/hknLXBe.jpg",
"https://i.pixxxels.cc/SsQNPWbp/HKOtDIh.jpg",
"https://i.pixxxels.cc/c4fyQrP7/HMIt2uG.jpg",
"https://i.pixxxels.cc/gkD9SrHv/hnENluM.jpg",
"https://i.pixxxels.cc/YSTTGFtw/hpPS0Nu.jpg",
"https://i.pixxxels.cc/Y9NY6NfK/HRx5kcB.jpg",
"https://i.pixxxels.cc/ncKSF5sZ/hSW8A6y.jpg",
"https://i.pixxxels.cc/brKCZ9zX/hUCENOJ.jpg",
"https://i.pixxxels.cc/nzTNhPSC/HzYPLw9.jpg",
"https://i.pixxxels.cc/5N5LQWq7/i3xyYBv.jpg",
"https://i.pixxxels.cc/7ZQF40zk/i65gJ38.jpg",
"https://i.pixxxels.cc/Gtk7ss9H/I9uQCpz.jpg",
"https://i.pixxxels.cc/gkMRHqQ8/IeX7shs.jpg",
"https://i.pixxxels.cc/v8Kb74XD/IJg5D9R.jpg",
"https://i.pixxxels.cc/ryxQjbNW/iJKjBMV.jpg",
"https://i.pixxxels.cc/3Rs7T6km/INgs3al.jpg",
"https://i.pixxxels.cc/9f1jD0rm/inRZEMq.jpg",
"https://i.pixxxels.cc/qRjMHQ8G/io0Guqa.jpg",
"https://i.pixxxels.cc/K8xGjdJ5/Ip3Ov4m.jpg",
"https://i.pixxxels.cc/ZqHw8y8Q/iq8Sgnn.jpg",
"https://i.pixxxels.cc/Sxp45Wct/IuPRKNP.jpg",
"https://i.pixxxels.cc/vHrk4C63/iwWhxGa.jpg",
"https://i.pixxxels.cc/JnCjHYX5/ixwXFR9.jpg",
"https://i.pixxxels.cc/qqkbyvKw/iYyKB5h.jpg",
"https://i.pixxxels.cc/jSbVvPfq/J1EM1ij.jpg",
"https://i.pixxxels.cc/C5qtsxLf/j5jgRi9.jpg",
"https://i.pixxxels.cc/Z5rbKfTS/j8KSOsw.jpg",
"https://i.pixxxels.cc/QxRNDFWv/JAnBIAD.jpg",
"https://i.pixxxels.cc/GmJKRs5p/JBbhG4R.jpg",
"https://i.pixxxels.cc/hjHTTS5w/JgKnzaM.jpg",
"https://i.pixxxels.cc/gjmRNMGq/Jj0Pr59.jpg",
"https://i.pixxxels.cc/FHQfZkzh/jka8V1B.jpg",
"https://i.pixxxels.cc/0N07mdCg/jNyjSQk.jpg",
"https://i.pixxxels.cc/sxVSwBwB/JQh0ULp.jpg",
"https://i.pixxxels.cc/j5RGKbXp/JQm1QN6.jpg",
"https://i.pixxxels.cc/BnY0vRdR/jrVDJvT.jpg",
"https://i.pixxxels.cc/QxZnrsd0/jsNm4op.jpg",
"https://i.pixxxels.cc/mZH25Z0k/JstzGQn.jpg",
"https://i.pixxxels.cc/jS88NTqQ/Ju8Ndz0.jpg",
"https://i.pixxxels.cc/QMmWVNXh/K4OmJQ0.jpg",
"https://i.pixxxels.cc/g0mYwvJ6/k6ds85A.jpg",
"https://i.pixxxels.cc/Xvs0pmmT/KaC7p9E.jpg",
"https://i.pixxxels.cc/vBwS8zHp/kcBoDtt.jpg",
"https://i.pixxxels.cc/nrP4rFGC/kIglY0H.jpg",
"https://i.pixxxels.cc/5y0TYSDp/kq9ffy6.jpg",
"https://i.pixxxels.cc/1XBFTptx/krH1rrM.jpg",
"https://i.pixxxels.cc/wBQGwrp0/kS2gsXi.jpg",
"https://i.pixxxels.cc/N03k7f3T/kUhBymG.jpg",
"https://i.pixxxels.cc/Y99BY7W1/kuinfBd.jpg",
"https://i.pixxxels.cc/y6Lz1k2v/KvRLU0Z.jpg",
"https://i.pixxxels.cc/8zhKCYjN/L2DUF2D.jpg",
"https://i.pixxxels.cc/MHD0S0vb/L37haVG.jpg",
"https://i.pixxxels.cc/d0Ph5k0q/L7AZ3uh.jpg",
"https://i.pixxxels.cc/43Z0vPps/l8hmHh1.jpg",
"https://i.pixxxels.cc/85bwpgY6/LE0WRy9.jpg",
"https://i.pixxxels.cc/mZHQRHcG/LiChtKP.jpg",
"https://i.pixxxels.cc/Sxr63bn2/Lj47EH1.jpg",
"https://i.pixxxels.cc/ZR2YqnM9/lL1IHeN.jpg",
"https://i.pixxxels.cc/D0vJq8cx/LUNZ8un.jpg",
"https://i.pixxxels.cc/vZNNkng6/lv9TqSL.jpg",
"https://i.pixxxels.cc/zGrBWLXK/lwP614T.jpg",
"https://i.pixxxels.cc/QxdYMVhx/m0UWr97.jpg",
"https://i.pixxxels.cc/PxRsM7W0/M1KFQHj.jpg",
"https://i.pixxxels.cc/GtP01pwn/m1qjpLm.jpg",
"https://i.pixxxels.cc/Kv3cCGw4/m81u9aa.jpg",
"https://i.pixxxels.cc/CL5n5ptV/MBuXfph.jpg",
"https://i.pixxxels.cc/J0DKC6fw/mhzMEmd.jpg",
"https://i.pixxxels.cc/9XNv3GHY/MIORtEM.jpg",
"https://i.pixxxels.cc/bwNDGDvr/mkgPUHU.jpg",
"https://i.pixxxels.cc/W4xhf5wq/mnxT2Ot.jpg",
"https://i.pixxxels.cc/C1BY9Yxw/MQaDwtl.jpg",
"https://i.pixxxels.cc/pTNLBpPD/mSDgWp5.jpg",
"https://i.pixxxels.cc/C5kD43yK/mTd8BWw.jpg",
"https://i.pixxxels.cc/dtnDKs9Y/mzrVH1l.jpg",
"https://i.pixxxels.cc/yNxZGgqt/n04wxF6.jpg",
"https://i.pixxxels.cc/6q7b6mxL/n0urOxh.jpg",
"https://i.pixxxels.cc/d0VxSBVF/NbdjqvB.jpg",
"https://i.pixxxels.cc/MpF7qbYq/NCElfvN.jpg",
"https://i.pixxxels.cc/43GJKjP5/NfBUG7L.jpg",
"https://i.pixxxels.cc/26BTPXps/ngZ4KZL.jpg",
"https://i.pixxxels.cc/6QSxrSLg/NlKBiCv.jpg",
"https://i.pixxxels.cc/cHK4ZdCD/NmSoLjo.jpg",
"https://i.pixxxels.cc/D0xW5njn/nnt8rAa.jpg",
"https://i.pixxxels.cc/XvJzDJ1z/nPNDuD4.jpg",
"https://i.pixxxels.cc/5yL4YpwL/nrbzAHd.jpg",
"https://i.pixxxels.cc/qMhWpzkV/nStVi4I.jpg",
"https://i.pixxxels.cc/SKhP7hwn/NuYF9pP.jpg",
"https://i.pixxxels.cc/pXc8JL8T/Nv3K5hC.jpg",
"https://i.pixxxels.cc/wTJM75H9/nv8h48I.jpg",
"https://i.pixxxels.cc/mZ56pMvf/nvoJqus.jpg",
"https://i.pixxxels.cc/YSCCn6HB/OAI4x5p.jpg",
"https://i.pixxxels.cc/g0c2Sfh0/OG70xM7.jpg",
"https://i.pixxxels.cc/SNc7LMqG/Ogzj0Hc.jpg",
"https://i.pixxxels.cc/zXpMw6q7/OhJAURI.jpg",
"https://i.pixxxels.cc/prSWpTch/oHWWHVA.jpg",
"https://i.pixxxels.cc/W4WQ2rJV/OjAXlx5.jpg",
"https://i.pixxxels.cc/tRSt2kGp/OMF5Eyg.jpg",
"https://i.pixxxels.cc/qvjKQcF2/omgY0bL.jpg",
"https://i.pixxxels.cc/HnD3H4dV/ooBkNu7.jpg",
"https://i.pixxxels.cc/dtfkTSPZ/oorzHgF.jpg",
"https://i.pixxxels.cc/YjK55HLm/OtZewFl.jpg",
"https://i.pixxxels.cc/7ZxsfV7z/owRFCT4.jpg",
"https://i.pixxxels.cc/g2r7gjTB/OxeVz75.jpg",
"https://i.pixxxels.cc/hPdZH6rK/P5SKdeh.jpg",
"https://i.pixxxels.cc/26xLbkrC/P7xGp0v.jpg",
"https://i.pixxxels.cc/2ys1gVxF/p97bIoF.jpg",
"https://i.pixxxels.cc/15y4TnwB/PBZouOr.jpg",
"https://i.pixxxels.cc/MpWRy39W/pcJCQn5.jpg",
"https://i.pixxxels.cc/Pr19LJRg/piKwquQ.jpg",
"https://i.pixxxels.cc/q74m6G3n/PiLyZ3p.jpg",
"https://i.pixxxels.cc/Vvb4P0XK/pkLl0QX.jpg",
"https://i.pixxxels.cc/5yNgjkck/PTwvffm.jpg",
"https://i.pixxxels.cc/LX80wsyW/pv8PzPS.png",
"https://i.pixxxels.cc/fbfR58FK/PyIwCsH.jpg",
"https://i.pixxxels.cc/LsG3BBqN/Q1r0DoA.jpg",
"https://i.pixxxels.cc/sxN8pZrz/Q20CkGK.jpg",
"https://i.pixxxels.cc/PqMd1KFk/q5Qu0qb.jpg",
"https://i.pixxxels.cc/N0v06KsR/qBSCCx8.jpg",
"https://i.pixxxels.cc/4dMyhmjk/qca4jf2.jpg",
"https://i.pixxxels.cc/nzHcWNQz/QE8RPPl.jpg",
"https://i.pixxxels.cc/Wph5Zzh9/QgsjixM.jpg",
"https://i.pixxxels.cc/qBNd7k0r/QIHOcxW.jpg",
"https://i.pixxxels.cc/cHYMDgwZ/QN1zTxI.jpg",
"https://i.pixxxels.cc/DfDYpn1C/qOulNKv.jpg",
"https://i.pixxxels.cc/pLP7zkfx/Qq6rH24.jpg",
"https://i.pixxxels.cc/cHt50zS7/QTLLjDB.jpg",
"https://i.pixxxels.cc/s2vT4LvF/qvKeOTD.jpg",
"https://i.pixxxels.cc/x1zCNv20/qw3KAge.jpg",
"https://i.pixxxels.cc/8z8v0nKQ/QxjNWNa.jpg",
"https://i.pixxxels.cc/d3pCvWJC/Qz85g8e.jpg",
"https://i.pixxxels.cc/vTBT450v/r1Y9Pd3.jpg",
"https://i.pixxxels.cc/tCgpWhFK/r4w66s5.jpg",
"https://i.pixxxels.cc/jSN5nx4B/rBiMyC9.jpg",
"https://i.pixxxels.cc/fytZ4CH1/re3uahN.jpg",
"https://i.pixxxels.cc/NfQ740Mq/RfKKUcu.jpg",
"https://i.pixxxels.cc/G2srVzgV/rfyBhY6.jpg",
"https://i.pixxxels.cc/13nSYsCM/rG6ZljA.jpg",
"https://i.pixxxels.cc/VLw4VRKh/RgpJWRc.jpg",
"https://i.pixxxels.cc/3RwnnJ9x/rI8HLF3.jpg",
"https://i.pixxxels.cc/dtFTYSP8/RKvbQic.jpg",
"https://i.pixxxels.cc/8CX08676/RlbCrzV.jpg",
"https://i.pixxxels.cc/cHV1LP8d/roAYaRM.jpg",
"https://i.pixxxels.cc/D0LjbpBr/RSgXkxT.jpg",
"https://i.pixxxels.cc/Qdx2Rsfv/rTvoEkh.jpg",
"https://i.pixxxels.cc/Gtxttdwv/RuFXOoZ.jpg",
"https://i.pixxxels.cc/638FT3dv/S6HqWo7.jpg",
"https://i.pixxxels.cc/cL9KfxKm/Sanmvds.jpg",
"https://i.pixxxels.cc/XJFmwvvB/sGEINJz.jpg",
"https://i.pixxxels.cc/Vv85z5TY/SIDois2.jpg",
"https://i.pixxxels.cc/brhXMPtS/SiuNvrP.jpg",
"https://i.pixxxels.cc/gjrQX08h/soC4ix3.jpg",
"https://i.pixxxels.cc/Y2GwCX3s/SPL7FQD.jpg",
"https://i.pixxxels.cc/XJc4cLHb/SQZXIsI.jpg",
"https://i.pixxxels.cc/NMV7D85d/SS9cAP5.jpg",
"https://i.pixxxels.cc/7ZM4yfVP/T0GgJcK.jpg",
"https://i.pixxxels.cc/4NwC8rNn/TCReBDR.jpg",
"https://i.pixxxels.cc/2ykmHWMB/TgU7OXJ.jpg",
"https://i.pixxxels.cc/fRFrpZ4W/thAY5PH.jpg",
"https://i.pixxxels.cc/KvVjY9Cq/tJmTI1z.jpg",
"https://i.pixxxels.cc/MTPxFHSP/tk5TpBB.jpg",
"https://i.pixxxels.cc/fTV7FdMX/TmzTjba.jpg",
"https://i.pixxxels.cc/gJdPJRYB/TqBqjiC.jpg",
"https://i.pixxxels.cc/3xSsh66N/TujqfiA.jpg",
"https://i.pixxxels.cc/Fzsd0MH3/TuXY40A.jpg",
"https://i.pixxxels.cc/xjHFZBgn/U0TPEK9.jpg",
"https://i.pixxxels.cc/wB8CfJsT/U1E3Jvt.jpg",
"https://i.pixxxels.cc/PrFh4P4P/U6ohGM1.jpg",
"https://i.pixxxels.cc/63ZzDGrY/U8CphFT.jpg",
"https://i.pixxxels.cc/c1BfrNcD/Uakalvz.jpg",
"https://i.pixxxels.cc/CxXqWMFK/UeBILIb.jpg",
"https://i.pixxxels.cc/SxKBHDJd/UEIhRm3.jpg",
"https://i.pixxxels.cc/sxWjGzkT/uFv2ij8.jpg",
"https://i.pixxxels.cc/7PVQDSvW/ug7nuoS.jpg",
"https://i.pixxxels.cc/9MxTgmSJ/UGfH4DX.jpg",
"https://i.pixxxels.cc/wMQKYrXf/UPj4Br7.jpg",
"https://i.pixxxels.cc/fRXcWhtR/UqLObtz.jpg",
"https://i.pixxxels.cc/SQvNZ2Zw/uR3hHx1.jpg",
"https://i.pixxxels.cc/qqsw7hvQ/US22Qma.jpg",
"https://i.pixxxels.cc/xCRVbC8j/UuZae1B.jpg",
"https://i.pixxxels.cc/Dwvhn1wj/uWMI0Ez.jpg",
"https://i.pixxxels.cc/Bn6bSrh1/uYHQ6hp.jpg",
"https://i.pixxxels.cc/0yQYTHDV/uZrt5t6.jpg",
"https://i.pixxxels.cc/zfgc1M5C/V6lfyZp.jpg",
"https://i.pixxxels.cc/FK3D6LgG/VAB7tKc.jpg",
"https://i.pixxxels.cc/rwmHfjmk/vGExRq8.jpg",
"https://i.pixxxels.cc/fTn1TMkV/vhXOjX5.jpg",
"https://i.pixxxels.cc/YqT0SGY1/vJU29qK.jpg",
"https://i.pixxxels.cc/MH1wKDB4/vjUFCAJ.jpg",
"https://i.pixxxels.cc/v8kb7RTy/vljlyFp.jpg",
"https://i.pixxxels.cc/pVfpqYhy/vNDnIOJ.jpg",
"https://i.pixxxels.cc/y63YbhD0/vR0bTYx.jpg",
"https://i.pixxxels.cc/RVz9pk5z/VTtwiAd.jpg",
"https://i.pixxxels.cc/9QjbsB1S/VuY2VYl.jpg",
"https://i.pixxxels.cc/W44s60RF/vuZfWfd.jpg",
"https://i.pixxxels.cc/BbW76CSr/VvmS2Cx.jpg",
"https://i.pixxxels.cc/d3y1RJK7/VVs416c.jpg",
"https://i.pixxxels.cc/jSJW6Qtg/w6uKkIp.jpg",
"https://i.pixxxels.cc/h4d3whcX/w7a96vq.jpg",
"https://i.pixxxels.cc/gjD7TZp1/w7iYawv.jpg",
"https://i.pixxxels.cc/zB46hrjP/wbYZ3R9.jpg",
"https://i.pixxxels.cc/135SsyYp/WD6SQ5c.jpg",
"https://i.pixxxels.cc/3JWQd3T7/WEfJIII.jpg",
"https://i.pixxxels.cc/bvZjS3Pr/WIJIFMt.jpg",
"https://i.pixxxels.cc/CxkhxwG5/wIUhChJ.jpg",
"https://i.pixxxels.cc/DyTY35Ys/wjC4yUX.jpg",
"https://i.pixxxels.cc/N0Fdxjdf/wqXyGDU.jpg",
"https://i.pixxxels.cc/zGPjvkpx/wSRdMvf.jpg",
"https://i.pixxxels.cc/T3qzs1jV/wTBO2pm.jpg",
"https://i.pixxxels.cc/Dw9T9HRh/WUhaOyK.jpg",
"https://i.pixxxels.cc/3wxXHfGL/Wv3Ppbv.jpg",
"https://i.pixxxels.cc/pLGZytPN/WVOPwzx.jpg",
"https://i.pixxxels.cc/mrY00DQ3/WXZYEs4.jpg",
"https://i.pixxxels.cc/HsL8n8nx/xFWaxhq.jpg",
"https://i.pixxxels.cc/sfc51cg5/xjej6vj.jpg",
"https://i.pixxxels.cc/5tXZ2gd3/xQlxvS6.jpg",
"https://i.pixxxels.cc/kXyw3bZg/xV4X1vq.jpg",
"https://i.pixxxels.cc/NjYhbQw3/xv784R8.jpg",
"https://i.pixxxels.cc/sD8dWbjW/xVsu10W.jpg",
"https://i.pixxxels.cc/W48s0hFY/XWvA84e.jpg",
"https://i.pixxxels.cc/GtHghhs5/xY0je5f.jpg",
"https://i.pixxxels.cc/9MjqQxw5/Xzj5SFc.jpg",
"https://i.pixxxels.cc/VkNgzh9S/XZxE83r.jpg",
"https://i.pixxxels.cc/pX9V3fyD/Y82JZeF.jpg",
"https://i.pixxxels.cc/3JZ0JCYz/yC0uttZ.jpg",
"https://i.pixxxels.cc/05hrkWTt/yDnosKD.jpg",
"https://i.pixxxels.cc/QCmNsm1b/YGakepI.jpg",
"https://i.pixxxels.cc/yxMMMSrP/yqGjWx1.jpg",
"https://i.pixxxels.cc/FRPsX7hk/YScobVU.jpg",
"https://i.pixxxels.cc/J7B9Ls7w/YSkt5Er.jpg",
"https://i.pixxxels.cc/qMvyK3NS/yXSugMI.jpg",
"https://i.pixxxels.cc/HnhxXjK1/yzCFO4W.jpg",
"https://i.pixxxels.cc/gkGFHYpf/z3yAUH4.jpg",
"https://i.pixxxels.cc/wj06m1sf/zASCQmB.jpg",
"https://i.pixxxels.cc/TwSFbDG6/zBCRq7f.jpg",
"https://i.pixxxels.cc/1Rkb5wJ0/ZBtPjSS.jpg",
"https://i.pixxxels.cc/Ssm7ttKN/zdqpk9G.jpg",
"https://i.pixxxels.cc/4xZMpZCm/zfCipP4.jpg",
"https://i.pixxxels.cc/NfGmXPJQ/zGgIXGf.jpg",
"https://i.pixxxels.cc/C1ybfht2/ZGybB54.jpg",
"https://i.pixxxels.cc/rs3Vz308/ZhUOGls.jpg",
"https://i.pixxxels.cc/wvtb9jNb/ZhvIu0P.jpg",
"https://i.pixxxels.cc/s2WhyFX4/zozh43K.jpg",
"https://i.pixxxels.cc/zfKgNwQb/ZpvPYUW.jpg",
"https://i.pixxxels.cc/ZKJ2d4z0/ZrBmiZo.jpg",
"https://i.pixxxels.cc/mDRtstKT/ZRj9zHb.jpg",
"https://i.pixxxels.cc/KjPkTtLk/ZvgpHTy.jpg",
"https://i.pixxxels.cc/jdM96PZ7/zZKvVvB.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("À con lợn này định đập quả lọ đúng không ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗧𝗮̀ 𝗗𝗮̂𝗺 𝗟𝘂𝗼̂𝗻 𝗖𝗼́ 𝗤𝘂𝘆̉ 𝗧𝗵𝗲𝗼 𝗦𝗮𝘂 😼\n» 𝗧𝗼̂𝗶 𝗯𝗶𝗲̂́𝘁 𝘁𝗵𝘂̛́ 𝗯𝗮̣𝗻 𝗰𝗮̂̀𝗻 𝗹𝗮̀ 𝗻𝘂̣ 𝗰𝘂̛𝗼̛̀𝗶 𝗻𝗵𝘂̛𝗻𝗴 ... «\n𝗦𝗼̂́ 𝗮̉𝗻𝗵: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};