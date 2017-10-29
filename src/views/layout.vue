<template>
    <div>
        <!-- 左侧菜单 -->
        <div id="menu">
            <ul>
                <li>主页</li>
                <li><router-link to="/index">vue</router-link></li>
            </ul>
        </div>
        <!--右侧内容区-->
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
    #menu {
        width: 220px;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        background: #fff;
        color: #41B883;
        ul {
            list-style: none;
            li {
                text-align: left;
                padding: 5px 20px;
                font-size: 16px;
            }
        }
    }
    
    #content {
        position: absolute;
        left: 220px;
        right: 0;
        bottom: 0;
        top: 0;
        background: #f2f2f2;
    }
</style>