<template>
    <modal name="settings_on_profile">
        Settings
    </modal>
</template>

<script>
export default {
    name: 'settings_on_profile',
    methods: {
        show () {
            this.$modal.show('settings_on_profile_modal');
        },
        hide () {
            this.$modal.hide('settings_on_profile_modal');
        }
    },
    mount () {
        this.show()
    }
}
</script>
