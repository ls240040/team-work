<!--recommendName.vue 评论页面组件-->
<template>
  <div class="recommendName">
    <!-- 评论框 -->
    <div>
      <div class="comment">
        <div class="divs">
          <img class="head" src="http://127.0.0.1:5050/icon/timg.jpg" alt />
          <div class="text">
            <p class="p1">{{list1[0].U_Name}}</p>
          </div>
        </div>
        <div>
          <img
            @click="coNice"
            v-if="!bbber"
            class="heart"
            src="http://127.0.0.1:5050/icon/collect.png"
            alt
          />
          <img
            @click="coNice"
            v-else
            class="heart"
            src="http://127.0.0.1:5050/icon/collect-fill.png"
            alt
          />
          <span ref="dz">{{list2.length}}</span>
        </div>
      </div>
      <p class="ptext">{{list1[0].CO_Content}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list1: [
        {
          U_Name: "",
          CO_Content: ""
        }
      ],
      list2: [],
      idd: "",
      bbber: false
    };
  },
  methods: {
    coNice() {
      this.bbber = !this.bbber;
      this.idd = this.$route.params.id;
      var uid = sessionStorage.getItem("accessToken");
      if (this.bbber) {
        var isClick = this.list2.join(",") + "," + uid;
        var num = parseInt(this.$refs.dz.innerHTML);
        this.$refs.dz.innerHTML = num + 1;
      } else {
      var num = parseInt(this.$refs.dz.innerHTML);
        this.$refs.dz.innerHTML = num - 1;
        for (var j = 0; j <= this.list2.length; j++) {
          if (this.list2[j] == this.idd) {
            var isClick = this.list2.slice(0, j) + this.list2.slice(j + 1);
          }
        }
      }
      var params = new URLSearchParams();
      params.append("id", this.idd);
      params.append("isClick", isClick);
      this.axios
        .post("/user/cNice", params) //传参
        .then(res => {
            
          
        }).catch(res=>{})
    },
    loadMsg() {
      this.idd = this.$route.params.id;
      var params = new URLSearchParams();
      params.append("id", this.idd);
      this.axios
        .post("/user/content", params) //传参
        .then(res => {
          if (res.data.code == 1) {
            this.list1 = res.data.data;
            console.log(this.list1);
            var beClick1 = this.list1[0].beClick;
            this.list2 = beClick1.split(",");
            console.log(this.list2);
            for (var i = 0; i <= this.list2.length; i++) {
              if (this.idd == this.list2[i]) {
                this.bbber = true;
                break;
              }
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  created() {
    this.loadMsg();
  }
};
</script>

<style lang="scss">
.recommendName {
  .photo {
    width: 95%;
    background: #eee;
    text-align: left;
    margin: 0rem 0.2rem 0rem 0.2rem;
    img {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      margin: 0rem 0.05rem 0rem 0.05rem;
    }
  }
  .comment {
    margin-top: 0.2rem;
    font-size: 0.25rem;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    border-top: 1px solid #ddd;
    .divs {
      width: 50%;
      text-align: left;
      .head {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        margin-right: 0.1rem;
        vertical-align: middle;
      }
      .text {
        display: inline-block;
        text-align: left;
        .p1 {
          display: inline-block;
        }
        img {
          width: 0.3rem;
          height: 0.3rem;
          vertical-align: middle;
          margin-left: 0.1rem;
        }
      }
    }
    .heart {
      width: 0.4rem;
      height: 0.4rem;
      vertical-align: middle;
      margin-right: 0.1rem;
    }
  }
  .ptext {
    font-size: 0.25rem;
    text-align: left;
    padding: 0rem 0.3rem 0rem 0.9rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.2rem;
  }
}
</style>

