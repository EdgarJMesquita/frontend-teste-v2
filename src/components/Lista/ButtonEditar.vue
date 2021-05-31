<template>
    <td class="editar">
        <router-link :to="{name: 'create', params:{id:chave}}">
            <a href="#">Editar</a>    
        </router-link>
    </td>
</template>

<script>
export default {
    props:{
        chave: Number
    }
}
</script>

<style lang="scss" scoped>
    .editar {
        

        //width: 10%;
        padding-right: 1rem;
        a {
            display: inline-block;
            transform: translateY(10%) ;
        }
    }
    @media(max-width:600px){
        .editar {
            position: absolute;
            bottom: 0rem;
            right: 1rem;
        }
    }
</style>