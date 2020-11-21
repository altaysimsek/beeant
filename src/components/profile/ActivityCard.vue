<template>
    <div class="activity-card mb-5 container" >
        <h2 >Activity Report</h2>
        <trend
            :data="[
                5,
                25,
                13
            ]"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            auto-draw
            :height="150"
            :width="1000"
            :stroke-width="5"
            :stroke-linecap="round"
            smooth
        >
        </trend>
    </div>
</template>
<script>
export default {};
</script>

<style scoped>
.activity-card{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
