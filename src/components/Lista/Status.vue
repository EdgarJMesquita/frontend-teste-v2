<template>
    <td class="status" :class="active?'ativo':'inativo'">
        <div>
            <p>{{ active?'Ativo':'Inativo' }}</p>
        </div>
    </td>
</template>

<script>
export default {
    props:{
        active: Number
    }
}
</script>

<style lang="scss" scoped>
    .status {
        // width: 10%;
       
        p {

            display: inline-block;

            font-size: 0.875rem;
            
            border-radius: 4px;

            height: 1.5rem;
            width: 3.8rem;

            text-align: center;
            line-height: 1.7;
            

            transform: translateY(20%);
            
        }
    }
    .ativo {
        p { 
            color: #065F46;
            background: #D1FAE5;

        }
    }

    .inativo {
        p {
            color: #991B1B;
            background: #FFE2E3;

        }
    } 
    @media(max-width: 600px){
        .status {
             position: absolute;
            right: .6rem;
            top: 0rem;
        }
    }
</style>