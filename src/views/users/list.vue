<template>
    <div class="table-con">
        <table class="table">
            <Header />
            <TableBody />
            <TableFooter />
        </table>
    </div>
</template>

<script>
import Header from '@/components/Lista/TableHeader.vue';
import TableBody from '@/components/Lista/TableBody.vue';
import TableFooter from '@/components/Lista/TableFooter.vue';

export default {
    name: 'UserList',

    components: {
        Header,
        TableBody,
        TableFooter
    },

    created(){
        this.$store.dispatch('fetchData')
    }
}
</script>

<style lang="scss" scoped>
    
    .table-con {
        width: 56rem;
        margin: 4rem auto;
        border-radius: 10px;
        border: 1px solid #E5E7EB;
        overflow: hidden;
        
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);

        .table {
            margin: 0;
        }
    }

    @media(max-width:900px){
        .table-con {
            width: 95%;
        }
    }
    
    @media(max-width: 600px){
        .table-con{
            margin-top: 1rem;
        }
    }
</style>