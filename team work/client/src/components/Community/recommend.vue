<template>
  <div>
    <div class="crecommend" v-for="(item,index) of list" :key="index">
      <div class="info">
        <div class="left">
          <div class="avatar">
            <img :src="`http://127.0.0.1:5050${item.R_Avatar}`" />
          </div>
          <div class="name">
            <span>{{item.R_Name}}</span>
            <img :src="`http://127.0.0.1:5050${item.R_Vip}`" />
            <p>{{item.R_Title}}</p>
          </div>
        </div>
        <div class="logo">
          <span class="attention" @click="attention(index,$event)">{{item.R_Attention}}</span>
          <img src="http://127.0.0.1:5050/icon/elipsis.png" />
        </div>
      </div>
      <div class="centerinfo">
        <p class="p1">{{item.R_Comment}}</p>
        <div class="pictures">
          <div class="im">
            <img :src="`http://127.0.0.1:5050${item.R_img1}`" />
          </div>
          <div class="im">
            <img :src="`http://127.0.0.1:5050${item.R_img2}`" />
          </div>
          <div class="im">
            <img :src="`http://127.0.0.1:5050${item.R_img3}`" />
          </div>
        </div>
      </div>
      <div class="bottominfo">
        <div class="left">
          <p>{{item.R_Time}}</p>
          <p>
            来自
            <i>{{item.R_Come}}</i>
          </p>
        </div>
        <div class="right">
          <div>
            <img src="http://127.0.0.1:5050/icon/message.png" @click="info(index)" />
            <span>{{item.R_Comnum}}</span>
          </div>
          <div>
            <img :src="active?collect:collect_active" @click="like(index)" />
            <span>{{item.R_Collect}}</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>
<script>
import Bus from "../../../src/Bus.js";
export default {
  data() {
    return {
      list: [],
      friends: [],
      active: true,
      collect: "http://127.0.0.1:5050/icon/collect.png",
      collect_active: "http://127.0.0.1:5050/icon/collect-fill.png",
    };
  },
  methods: {
    like(i) {
      var url = "community/recommend";
      this.axios.get(url).then(res => {
        if (res.data.code == 1) {
          var add = this.list[i].R_Collect + 1;
        }
      });
    },
    info(i) {
      var url = "community/recommend";
      this.axios.get(url).then(res => {
        console.log(res.data.data);
        if (res.data.code == 1) {
          Bus.$emit('val',res.data.msg);
          var id = res.data.data[i].ID;
          var avatar = res.data.data[i].R_Avatar;
          this.$router.push({
            name: "recommendDetailed",
            params: {
              id: id,
              avatar: avatar
            }
          });
        }
      });
    },
    attention(index, e) {
      this.name++;
      index=parseInt(index)+1;
      console.log(index);
      for(var item of this.list){
          if(item.ID==index){
            var id=item.ID;
            item.R_Attention="已关注";
            var attention2=item.R_Attention;
            // friends
            var avatar = item.R_Avatar;
            var name = item.R_Name;
            var title = item.R_Title;
            var vip = item.R_Vip;
            var comment = item.R_Comment;
            var img1 = item.R_img1;
            var img2 = item.R_img2;
            var img3 = item.R_img3;
            var time = item.R_Time;
            var comnum = item.R_Comnum;
            var collect = item.R_Collect;
            var url='community/friends';
            var obj={avatar,name,title,vip,comment,img1,img2,img3,time,comnum,collect};
            this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code==1){
                    this.friends=res.data.data;
                    this.loadMore()
                }
            });
            // recommend
            var url='community/recommend2';
            var obj={attention2,id}
            this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code==2){
                    console.log(res.data.msg);
                    Bus.$emit('val',res.data.msg)
                }
            })
          }
      }
    },
    loadMore() {
      // 推荐
      var url = "community/recommend";
      this.axios.get(url).then(res => {
        console.log(res.data.data);
        if (res.data.code == 1) {
          this.list = res.data.data;
          console.log(this.list);
        }
      });
    }
  },
  created() {
    this.loadMore();
  }
};
</script>
<style lang="scss" scoped>
@import url("../../assets/scss/reset.scss");
.crecommend {
  padding: 0 0.2rem 0;
}
hr {
  opacity: 0.5;
}
.info {
  display: flex;
  justify-content: space-between;
  margin-top: 0.6rem;
  .left {
    display: flex;
    justify-content: space-between;
    line-height: 0.35rem;
    .avatar {
      width: 12vw;
      height: 12vw;
      border-radius: 50%;
      overflow: hidden;
      bottom: 0;
      align-self: flex-end;
      margin-right: 0.2rem;
      img {
        width: 12vw;
      }
    }
    .name {
      line-height: 0.4rem;
      align-self: top;
      text-align: left;
      span {
        font-size: 0.3rem;
        margin-right: 0.2rem;
      }
      img {
        height: 0.3rem;
        margin-bottom: -0.05rem;
      }
      p {
        font-size: 0.2rem;
        color: #999;
      }
    }
  }
  .logo {
    width: 50vw;
    display: flex;
    justify-content: flex-end;
    .attention {
      border: 1px solid #ff2626;
      color: #ff2626;
      border-radius: 0.3rem;
      font-size: 0.25rem;
      padding: 0.1rem 0.3rem;
      align-self: center;
    }
    img {
      height: 0.6rem;
      align-self: center;
      margin-left: 0.1rem;
    }
  }
}
.centerinfo {
  text-align: left;
  font-size: 0.25rem;
  box-sizing: border-box;
  .pictures {
    display: flex;
    margin: 0.2rem 0;
    height: 2.5rem;
    .im {
      width: 33%;
      overflow: hidden;
      margin-right: 0.2rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  p {
    margin-top: 0.3rem;
    line-height: 0.4rem;
  }
}
.bottominfo {
  display: flex;
  justify-content: space-between;
  font-size: 0.25rem;
  color: #999;
  .left {
    display: flex;
    line-height: 0.35rem;
    p {
      margin-right: 0.2rem;
    }
    i {
      font-style: normal;
      color: #ff8315;
      margin-left: 0.1rem;
    }
  }
  .right {
    display: flex;
    div {
      display: flex;
      margin-right: 0.1rem;
      img {
        height: 0.35rem;
        display: block;
        margin: 0 0.06rem;
      }
    }
  }
}
</style>