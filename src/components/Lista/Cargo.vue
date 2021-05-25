<template>
    <td class="cargo">
        <div>
            <p>{{ department }}</p>
            <span>{{ occupation }}</span>
        </div>
    </td>
</template>

<script>
export default {
    props:{
        department: String,
        occupation: String,
       
    }
}
</script>