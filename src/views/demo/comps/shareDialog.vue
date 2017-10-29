<template>
    <div>
        <div class="cover" v-if="isShow">
            
            <div class="range">
                <h2>分享到……</h2>
                <span v-for="(item,index) in shareRangeList" :key="index">
                    <input type="radio" name="rdo">
                    <label for="">{{item.name}}</label>
                </span>
                <div class="btn-group">
                    <a href="javascript:void(0);" @click="cancel">取消</a><a href="javascript:void(0);" @click="submit">确定</a>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                shareRangeList: [{
                    id: 0,
                    name: '全国'
                }, {
                    id: 1,
                    name: '省'
                }, {
                    id: 2,
                    name: '市'
                }, {
                    id: 3,
                    name: '区'
                }],
            }
        },
        methods: {
            cancel() {
                this.$emit('isShow', false);
            },
            sumit() {

            }

        }
    }
</script>

<style lang="scss" scoped>
    .cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        .range {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            background: #fff;
            h2 {
                text-align: left;
                padding: 10px 0 10px 10px;
                background: #41B883;
                color: #fff;
            }
            span {
                display: inline-block;
                width: 80px;
                padding: 20px 10px 10px 10px;
            }
            .btn-group {
                padding: 10px 20px 15px 0;
                text-align: right;
                a {
                    display: inline-block;
                    width: 45px;
                    color: #8ed5b5;
                    text-decoration: none;
                }
            }
        }
    }
</style>