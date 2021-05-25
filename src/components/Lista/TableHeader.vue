<template>
    <thead class="thead-light">
        <tr>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Status</th>
            <th>Função</th>
            <th></th>
        </tr>
    </thead>
</template>

<script>
export default {
    name: 'TableHeader'
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    .thead-light{
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: .75rem;
       
        tr th {
            height: 3.5rem;
            line-height: 1.75rem;

            border: none;

            text-transform: uppercase;
            color: #6B7280 !important;
            background: #F9FAFB !important;

            &:first-child {
                padding-left: 2.5rem;
                //width: 25%;
                
            }
            &:nth-child(2) {
                //width: 25%;
            }
            
        }
        
    }
</style>