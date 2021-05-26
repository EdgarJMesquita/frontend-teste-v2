<template>
    <div class="con">
        <Header />
        <InputGroup />
        
    </div>
</template>


<script>
import Header from '@/components/Criar/Header.vue'
import InputGroup from '@/components/Criar/InputGroup.vue'

export default {
    name: 'create',
    components: {
        Header,
        InputGroup
    }
}
</script>
<style lang="scss">
    .con {
        width: 56rem;
        margin: 4rem auto;

        background: #F9FAFB;

        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);

        //border: 1px solid #E5E7EB;
        border-radius: 10px;

        overflow: hidden;
        
    }

    @media(max-width: 900px){
        .con {
            width: 95%;
        }
    }
    @media(max-width:500px){
        .con {
            margin-top: 1rem;
        }
    }
    
</style>



