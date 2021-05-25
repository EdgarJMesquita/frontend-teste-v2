<template>
    <td class="editar">
        <a href="#">Editar</a>    
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
        a {
            display: inline-block;
            transform: translateY(20%) !important;
        }
    }
</style>