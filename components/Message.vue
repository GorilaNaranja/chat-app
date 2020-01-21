<template>
  <div class="ml-2">
    <v-row>
      <v-col cols="md-2">
        <v-chip small> {{ message.user }} </v-chip>
      </v-col>
      <v-col cols="md-10"
        ><v-card class="pa-1 " shaped elevation="7" round="3">
          <span class="caption font-weight-thin pl-2">
            {{ message.date | hourFormat }}
          </span>
          <v-divider class="mx-4"></v-divider>
          <span class="subtitle-1 pl-2">{{ message.message }} </span>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
