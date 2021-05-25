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
        p, span {
            margin: 0 !important;
            line-height: 1;
            padding: 0;
        }

        tbody {
            
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

                font-weight: 600;
                color: #111827;
            }

            span {
                font-size: 0.875rem;
                color: #6B7280;
            }

            /*.perfil {
                display: flex;
                gap: .5rem;
                
                img {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;

                }

            } */

            /*
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
            } */

           /* .funcao {
                //width: 10%;
                p {
                    font-size: 0.875rem;
                    color: #6B7280;
                    
                    transform: translateY(70%);

                }
            } */

           /* .editar {
                //width: 10%;
                a {
                    display: inline-block;
                    transform: translateY(20%) !important;
                }
            }
            */
            
        }

        /*<td>
                <div class="perfil">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6EWxUzesDaGLTgNlkGxNvAHaD8%26pid%3DApi&f=1" alt="Imagem">
                    <div>
                        <p>{{ user.name }}</p>
                        <span>{{ user.email }}</span>
                    </div>
                </div>
            </td>

            <td class="cargo">
                <div>
                    <p>{{ user.department }}</p>
                    <span>{{ user.occupation }}</span>
                </div>
            </td>

            <td :class="user.active?'status ativo':'status inativo'">
                <div>
                    <p>{{ user.active?'Ativo':'Inativo' }}</p>
                </div>
            </td>

            <td class="funcao">
                <div>
                    <p>{{ user.role }}</p>
                </div>
            </td>

            <td class="editar">
                <a href="#">Editar</a>    
            </td>
        */
</style>
