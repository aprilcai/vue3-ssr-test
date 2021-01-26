<template>
    <div>
        {{somePros.data.info}}
    </div>
</template>
<script>
export default {
    props: {
        somePros: {
            type: Object,
            required: true,
            default: () => {}
        }
    }
}
</script>