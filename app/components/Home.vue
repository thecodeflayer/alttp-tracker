<template>
    <Page>
        <Navbar></Navbar>
        <GridLayout>
            <Label class="info">
                <FormattedString>
                    <Span :text="JSON.stringify(this.$modelManager.getItem('sword'))"/>
                </FormattedString>
            </Label>
        </GridLayout>
    </Page>
</template>

<script>

    export default {
        computed: {

        },
        methods: {

        }
    };
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/forest';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
