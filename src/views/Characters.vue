<template>
    <div>
        <character-list :charact= "characters"/>
        <pagination :actualPage= "actualPage"/>
    </div>
</template>

<script>
    import CharacterList from '../components/CharacterList';
    import Pagination from '../components/Pagination';
    // import * as CharacterService from '../services/CharacterService'; //перенесли в actions
    export default {
        name: "characters",
        components: {
            CharacterList,
            Pagination,
        },
        data() {
            return {
                // characters: [], //в сторі
            }
        },
        created(){
            /* CharacterService.fetchCharacters().then((res) => {
                this.characters = res.data.results;
                },) */ //перенесено в actions
            const {number} = this.$route.params;
            // this.$store.dispatch('fetchCharacters');
            this.$store.dispatch('fetchCharactersPage', {number});
        },
        beforeRouteUpdate(to, from, next){
            const {number} = to.params;
            this.$store.dispatch('fetchCharactersPage', {number});
            next();
        },
        computed: {
            characters(){
                // return this.$store.state.characters; //варіан напряму зі стори
                return this.$store.getters.characters; //варіант через геттерс
            },
            actualPage(){
                return this.$store.state.actualPage;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>