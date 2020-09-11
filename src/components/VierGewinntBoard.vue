<template>
    <div id="vierGewinntBoard">
        <div class="boardRow" v-for="(boardArrayRow,rowIndex) in boardArray" :key="rowIndex">
            <div class="boardCell" v-for="(boardCell,columnIndex) in boardArrayRow"
                 :key="rowIndex*10 + columnIndex"
                ></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VierGewinntBoard",
        props: ["boardArray"],
    }
</script>

<style scoped>
    .boardCell {
        width: 2rem;
        height: 2rem;
        border: solid black 2px;
        border-radius: 5px;
    }

    .boardRow {
        display: flex;
    }
</style>
