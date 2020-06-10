<template>
    <Page>
        <Navbar></Navbar>
        <GridLayout>
            <Label class="info">
                <FormattedString>
                    <Span :text="message"/>
                </FormattedString>
            </Label>
            <Image src="~/assets/images/0058.png" stretch="none" />
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        computed: {
            message() {
                return "Light World Map";
            }
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
