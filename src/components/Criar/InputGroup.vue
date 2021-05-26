<template>
    <form @submit="(e)=>e.preventDefault()">
        <div class="inputs">
            <div class="changepicture">
                <p>Foto</p>
                <div>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6EWxUzesDaGLTgNlkGxNvAHaD8%26pid%3DApi&f=1" alt="picture">
                    <input type="button" value="Modificar" />
                </div>
            </div>
            <div class="form-row">
                <div class="col was-validated">
                    <label for="nome">Nome</label>
                    <input v-model="name" type="text" class="form-control" placeholder="Digite o nome" minlength="3" required/>
                    <div class="invalid-feedback">O campo deve conter 3 caracteres ou mais.</div>
                    
                </div>
                <div class="col was-validated">
                    <label for="email">E-mail</label>
                    <input type="email" v-model="email" class="form-control" placeholder="me@example.com" required/>
                    <div class="invalid-feedback">Digite um email válido</div>
                </div>
            </div>

            <div class="form-row">
                <div class="col">
                    <label for="setor">Setor</label>
                     <select v-model="department" class="custom-select" required>
                        <option selected>Selecione o item</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Ads">Ads</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Branding & Marketing">Branding & Marketing</option>
                        <option value="Architectural Genie">Architectural Genie</option>
                        <option value="Branding">Branding</option>
                        <option value="Design">Design</option>
                    </select>
                </div>
                
                
                <div class="col">
                    <label for="email">Occupation</label>
                    <select v-model="occupation" class="custom-select" required>
                        <option selected>Selecione o item</option>
                        <option value="Account executive">Account executive</option>
                        <option value="Brand Manager">Brand Manager</option>
                        <option value="Copywriting">Copywriting</option>
                        <option value="Content Manager">Content Manager</option>
                        <option value="Specialist">Specialist</option>
                        <option value="Computer Network Architect">Computer Network Architect</option>
                        <option value="Trainee">Trainee</option>
                        <option value="UI/UX">UI/UX</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <label for="funcao">Função</label>
                    <select v-model="role" class="custom-select" required>
                        <option selected>Selecione o item</option>
                        <option value="Admin">Admin</option>
                        <option value="Editor">Editor</option>
                    </select>
                </div>
                <div class="col"></div>
            </div>
            <div class="statusBtn">
                <img v-if="active" @click="toggle" src="@/assets/Ativo.svg" alt="Ativo">
                <img v-else @click="active=!active" src="@/assets/Inativo.svg" alt="Inativo">
            </div>
        </div>
        
        <div class="btn-con">
            <router-link to="/">
                <button @click="saveChanges" class="btn btn-primary">Salvar</button>
            </router-link>
        </div>
    </form>
    
</template>

<script>
export default {
    data(){
        return {
            name: '',
            email: '',
            department: 'Selecione o item',
            occupation: 'Selecione o item',
            role:'Selecione o item',
            active: 1,
            cpf: Number
        }
    },
    methods:{
        toggle(){
            this.active = this.active==1?0:1
        },
        saveChanges(){
            if(!this.name || !this.email){
                return
            }
            
            let id = this.$route.params.id
            
            const changes = {
                name: this.name,
                email: this.email,
                department: this.department,
                occupation: this.occupation,
                role:this.role,
                active: this.active? 1:0,
                cpf: this.cpf
            }

            if(!id){
                this.$store.commit('saveChanges',{...changes, cpf:Date.now()})

            }else{
                this.$store.commit('updateData',changes)
                
            }
        }
    },
   
    created(){

        let id = this.$route.params.id
        
        if(id){
            this.$store.state.users.map(user=>{
                if(user.cpf==id){
                    this.name = user.name
                    this.email = user.email
                    this.department = user.department
                    this.occupation = user.occupation
                    this.role = user.role
                    this.active = user.active
                    this.cpf = user.cpf
                }
            })
            
        }
        

    }
    
}
</script>

<style lang="scss" scoped>
    form{
        background: #FFFFFF;
        border-top: 1px solid #E5E7EB;
        
        width: 100%;

        
        .inputs {
            padding: 3rem 4rem;
            border-bottom: 1px solid #E5E7EB;
            div {
                margin: .3rem 0;
            }

            .changepicture {
                margin-bottom: 1rem;
                p {
                    margin: .5rem .2rem;
                    display: inline-block;
                }

                img {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 1.5rem;

                }

                input {
                    margin-left: 1rem;
                    background-color: #fff;
                    border: 1px solid #C4C4C4;
                    border-radius: 4px;
                    font-size: 0.875;
                }

            }

            .statusBtn {
                margin-top: 1.5rem;
            }
        }
        .btn-con {
            height: 4.375rem;
            
            display: flex;
            justify-content: flex-end;
            align-items: center;
            background: #F9FAFB;
            .btn {
                margin-right: 1.5rem;
            }
        }
    }
   @media(max-width:550px){
        .form-row {
            flex-direction: column;
        }
        .inputs {
            padding: 1rem 2rem !important;
        }
    }
</style>