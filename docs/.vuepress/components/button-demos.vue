<template>
    <div>
        <l-button>默认按钮</l-button>
        <l-button icon="settings">默认按钮</l-button>
        <l-button :loading="true">默认按钮</l-button>
        <l-button disabled>默认按钮</l-button>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Button from "../../../src/button";

    export default {
        components: {
            'l-button': Button
        }, data() {
            return {
                content: `
        <l-button>默认按钮</l-button>
        <l-button icon="settings">默认按钮</l-button>
        <l-button :loading="true">默认按钮</l-button>
        <l-button disabled>默认按钮</l-button>`.replace(/\t+| +/g, '').trim()
            }
        }
    }
</script>

<style scoped>

</style>