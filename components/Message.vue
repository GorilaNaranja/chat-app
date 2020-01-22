<template>
  <div>
    <v-row no-gutters align="center">
      <v-col cols="md-2" class="text-right pr-2">
        <v-chip small>
          <v-avatar left>
            <v-icon>mdi-account-circle</v-icon>
          </v-avatar>
          {{ message.user }}
        </v-chip>
      </v-col>
      <v-col cols="md-10"
        ><v-card class="pa-1" shaped round="3">
          <v-flex d-flex>
            <v-spacer></v-spacer>
            <span class="caption font-weight-thin pl-2">
              {{ message.date | hourFormat }}
            </span>
          </v-flex>
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
