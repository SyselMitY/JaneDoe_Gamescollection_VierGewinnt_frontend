<template>
    <VierGewinntBoard :board-array="boardArray"></VierGewinntBoard>
</template>

<script>
    import VierGewinntBoard from "@/components/VierGewinntBoard";
    export default {
        name: "ViewBoard",
        components: {VierGewinntBoard},
        data() {
            return {
                boardArray: [[1,2],[1,0]]
            }
        }
    }
</script>

<style scoped>

</style>
