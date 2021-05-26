<template>
    <tfoot>
        <tr>
            <td colspan=5>
                <router-link to="/create">
                    <button class="btn btn-primary">Novo</button>
                </router-link>
            </td>
        </tr>
    </tfoot>
</template>

<script>
export default {
    name: 'TableFooter'
}
</script>

<style lang="scss" scoped>
tfoot {
    margin: 0;
    padding: 0;
    position: relative;
    background: #F9FAFB;
    
    td {
        height: 4.37rem;
        position: relative;
        .btn {
            position: absolute;
            top: 1rem;
            right: 1rem;

            margin: 0 .3rem;
            width: 4.62rem;
        }
    }
}
</style>