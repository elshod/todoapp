<template>
  <div class="header">
      <div class="header__search">
          <img src="@/assets/search.png" alt="">
          <input type="text" v-model="search" placeholder="Search for any training you want ">
      </div>
      <div class="header__right">
        <div class="header__notif">
                <span class="header__notif--count"></span>
              <img src="@/assets/notif.png" alt="">
        </div>
        <div class="header__avatar"><img src="@/assets/profile.png" alt=""></div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            search:''
        }
    },
}
</script>

<style lang="less">
    .header {
        display: flex;
        align-items: center;
        margin-bottom: 47px;
        &__search {
            display: flex;
            align-items: center;
            input {
                border:0;
                color: #90A0B7;
                min-width: 300px;
                &:focus {
                    outline: 0;
                }
            }
            img {
                margin-right: 15px;
            }
        }
        &__right {
            display: flex;
            align-items: center;
            margin-left: auto;
        }
        &__avatar {
            margin-left: 33px;
        }
        &__notif{
            position: relative;
            &--count {
                position: absolute;
                display: inline-block;
                background-color: #F7685B;
                border:1px solid #fff;
                width: 8px;
                height: 8px;
                right: -3px;
                top: -1px;
                border-radius: 50%;
            }
        }
    }
</style>