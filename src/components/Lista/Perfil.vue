<template>
    <td>
        <div class="perfil">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6EWxUzesDaGLTgNlkGxNvAHaD8%26pid%3DApi&f=1" alt="Imagem">
            <div>
                <p>{{ name }}</p>
                <span>{{ email }}</span>
            </div>
        </div>
    </td>
</template>

<script>
export default {
    name: 'Perfil',
    props:{
        name: String,
        email: String
    }
}
</script>

<style lang="scss" scoped>
    
    .perfil {
        display: flex;
        gap: .5rem;
        
        img {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;

        }


    }
</style>