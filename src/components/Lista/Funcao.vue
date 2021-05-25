<template>
    <td class="funcao">
        <div>
            <p>{{ role }}</p>
        </div>
    </td>
</template>

<script>
export default {
    name: 'Funcao',
    props:{
        role: String
    }
}
</script>

<style lang="scss" scoped>
    .funcao {
        //width: 10%;
        p {
            font-size: 0.875rem;
            color: #6B7280;
            
            transform: translateY(70%);

        }
    }
</style>