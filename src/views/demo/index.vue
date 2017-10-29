<template>
    <div class="index">
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>标题</th>
                    <th>时间</th>
                </tr>
            </thead>
            <tbody>
                <tr @click="radio">
                    <td>1</td>
                    <td>单选和复选</td>
                    <td>2017/10/27</td>
                </tr>
            </tbody>
        </table>
        
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            radio() {
                console.log(this.$router);
                this.$router.push('radio')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .index {
        background: #fff;
        margin: 20px;
        padding: 20px 15px 10px;
        table {
            width: 100%;
            border-collapse: collapse;
            th {
                background: #f2f2f2;
                padding: 6px 0;
            }
            td {
                border-bottom: #f2f2f2 solid 1px;
                padding: 8px 0;
            }
            tbody {
                tr {
                    cursor: pointer;
                }
            }
        }
    }
</style>