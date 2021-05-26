<template>
   <tbody>
        <tr v-for="user in $store.state.users" :key="user.cpf">
            
            <Perfil 
                :name="user.name" 
                :email="user.email"/>

            <Cargo 
                :department="user.department" 
                :occupation="user.occupation" />

            <Status 
                :active="user.active"/>

            <Funcao 
                :role="user.role"/>

            <ButtonEditar 
                :chave="user.cpf"/>

        </tr>
    </tbody>
</template>

<script>
import Perfil from '@/components/Lista/Perfil.vue'
import Cargo from '@/components/Lista/Cargo.vue'
import Status from '@/components/Lista/Status.vue'
import Funcao from '@/components/Lista/Funcao.vue'
import ButtonEditar from '@/components/Lista/ButtonEditar.vue'

export default {
    name: 'TableBody',
    components: {
        Perfil,
        Cargo,
        Status,
        Funcao,
        ButtonEditar
    }
}
</script>

<style lang="scss" >

        tbody {
            p, span {
                margin: 0 !important;
                line-height: 1;
                padding: 0;
            }
            
            td {
                height: 4.375rem;
               
                border-bottom: 1px solid #E5E7EB;

                padding-top: 17px !important;

                &:first-child {
                    padding-left: 2.5rem;
                }
            }

            p {
                font-size: 1rem;

                font-weight: 500;
                color: #111827;
            }

            span {
                font-size: 0.875rem;
                color: #6B7280;
            }

          
            
        }

        @media(max-width:600px) {

            tbody {
                tr {
                    display: flex;
                    flex-direction: column;

                    padding-top: 1rem;
                    margin: 1rem;
                    
                    border-radius: 10px;
                    border: 1px solid #E5E7EB;

                    td {
                        border: none !important;
                        padding-left: 2rem !important;
                    }
                }
            }

        }
</style>
