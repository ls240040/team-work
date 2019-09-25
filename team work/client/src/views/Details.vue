<!--index.vue -->
<template>
  <div><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi ea voluptas porro, saepe numquam dolor dignissimos fuga id inventore asperiores natus voluptates, ipsam animi, facilis iure debitis aspernatur consequuntur perferendis ipsa. Recusandae odit quis cumque eius incidunt? Cupiditate saepe harum omnis, earum praesentium eligendi ducimus culpa facere expedita adipisci repellat perferendis officia dolor dolorum modi enim quod dicta aliquam, recusandae, doloribus quia autem quisquam. Voluptatibus, beatae officia ab consequuntur tenetur quasi corporis atque laudantium enim molestias. Sint nemo aspernatur suscipit voluptatibus amet consequuntur laborum? Sapiente veritatis neque blanditiis et reiciendis dicta nemo dolorem odio modi, quo provident quia nobis placeat error maiores ea fugit aperiam eligendi assumenda. Repudiandae iusto aperiam rerum voluptates consequatur sed, perferendis enim atque earum, pariatur autem neque alias accusantium, minima eius accusamus corrupti. Fuga voluptatum, totam quas, et molestias, harum nulla ab ad esse reprehenderit ex. Odit dolorum nostrum saepe praesentium inventore cumque perferendis voluptas numquam, nesciunt eos magni neque dolores ratione architecto unde perspiciatis sed aperiam totam libero! Nulla nihil eum laudantium dolores veritatis libero molestias minus repudiandae rerum velit officia ipsum accusamus at expedita aperiam, laboriosam ducimus? Pariatur consequuntur explicabo, ab soluta corporis voluptatem, nam eum aliquam excepturi vitae dicta delectus eligendi expedita facere inventore architecto deleniti maiores numquam autem fugit accusantium doloremque dolore nihil eaque? Porro commodi ex, eius quos labore, dolores nulla nihil optio voluptas vel dolor assumenda? Impedit neque soluta architecto error quidem quia doloribus perferendis eius voluptatem. Assumenda culpa minus, ipsam officiis aspernatur harum excepturi voluptate exercitationem magni, sapiente animi dolorem alias sint deserunt! Veniam quisquam ipsa voluptatum, voluptas velit inventore fugit odio tempora? Alias consequatur, similique laborum iure repellendus eveniet corporis odit, quo quas earum vel excepturi labore? Reprehenderit nemo quam aut ea cum. Eveniet veritatis architecto voluptatem ullam reiciendis alias, quibusdam quasi harum voluptatum neque sed nostrum nemo optio repellendus illum! Error perferendis vel quae eaque nam, excepturi voluptate blanditiis autem, rerum quidem quibusdam. Recusandae ex assumenda cupiditate optio, modi doloribus nemo quaerat magni dolorum. Delectus minus ut ratione inventore voluptas fugiat id voluptate numquam beatae dolorum. Eligendi dolores sint, molestiae ducimus rerum saepe eaque nobis facere, sequi dolore totam quidem eveniet corporis praesentium facilis officia dicta quos, nesciunt soluta modi illum sit voluptatibus ea! Quidem, repellat possimus sunt alias dignissimos deserunt blanditiis vel suscipit amet cupiditate? Sit rerum distinctio molestiae. Ullam perspiciatis provident voluptates vitae odio ab a, quam libero itaque doloribus quidem ad in sunt nisi labore inventore neque quasi magnam quos eos! Dicta placeat voluptates est? Adipisci repellat commodi expedita dolore mollitia ipsam hic modi, magni nemo, dolores explicabo. Repudiandae quisquam ipsam doloremque recusandae fugit suscipit reiciendis minima perspiciatis reprehenderit mollitia soluta repellat, maiores odit incidunt dolores voluptates quis amet? Numquam ducimus sapiente nam nobis sint labore incidunt eos? Voluptatum et vero quos tempore ipsam? Repellendus debitis repudiandae voluptates tempore itaque molestiae magni officia eaque sequi culpa esse, est veritatis a magnam dolore molestias ut dolores ipsam aut, nisi reiciendis in amet. Ab modi natus quaerat facere vitae dolorem eveniet quam magni porro nemo!</span></div>
</template>
<script>
export default {
  data() {
    return {
      scroll:""
    };
  },
  beforeCreate() {
    //  this.$router.push({path:'/community'})
     
  },
  created () {
    // this.scroll=this.$route.params.scrollTop;
    console.log(this.$route.params.scrollTop);
    this.$router.push({
        name: "community",
        params:{
            scroll2:this.$route.params.scrollTop
        }
    });
  }
};
</script>
<style lang="scss">
@import url("../assets/scss/reset.scss");
body {
  background: #fff;
}
</style>

