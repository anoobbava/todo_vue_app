<template>
  <v-container style="max-width: 500px">
    <v-text-field
      v-model="task"
      label="What are you working on?"
      solo
      @keydown.enter="createTodo"
    >
      <v-fade-transition v-slot:append>
        <v-icon
          v-if="task"
          @click="createTodo"
        >
          add_circle
        </v-icon>
      </v-fade-transition>
    </v-text-field>

    <h2 class="display-1 success--text pl-4">
      Tasks:&nbsp;
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${this.allTodos.length}`">
          {{ this.allTodos.length }}
        </span>
      </v-fade-transition>
    </h2>

    <v-divider class="mt-4"></v-divider>

    <v-row
      class="my-1"
      align="center"
    >
      <strong class="mx-4 info--text text--darken-3">
        Remaining: {{ remainingTasks }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-4 black--text">
        Completed: {{ completedTasks }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular
        :value="progress"
        class="mr-2"
      ></v-progress-circular>
    </v-row>

    <v-divider class="mb-4"></v-divider>

    <v-card v-if="this.allTodos.length > 0">
      <v-slide-y-transition
        class="py-0"
        group
        tag="v-list"
      >
      </v-slide-y-transition>
      <template v-for="(task, i) in this.allTodos">
          <v-divider
            v-if="i !== 0"
            :key="`${i}-divider`"
          ></v-divider>

          <v-list-item :key="`${i}-${task.title}`">
            <v-list-item-action>
              <v-checkbox
                v-model="task.is_completed"
                color="info darken-3"
                @change="updateTodo(task)"
              >
                <template v-slot:label>
                  <div
                    :class="task.is_completed && 'grey--text' || 'text--primary'"
                    class="ml-4"
                    v-text="task.title"
                  ></div>
                </template>
              </v-checkbox>

            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
              <v-icon
                v-if="task.is_completed"
                color="success"
              >
                Completed
              </v-icon>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SweetAlert from '@/services/SweetAlert'

export default {
  data: () => ({
    task: null
  }),

  computed: {
    ...mapGetters(['allTodos']),

    completedTasks () {
      return this.allTodos !== '' &&
        this.allTodos.filter(task => task.is_completed).length
    },

    progress () {
      return this.completedTasks / this.allTodos.length * 100
    },

    remainingTasks () {
      return this.allTodos.length - this.completedTasks
    }
  },

  methods: {
    ...mapActions(['saveTodoAction', 'updateTodoAction']),

    createTodo () {
      const todoData = { 'title': this.task }
      this.saveTodoAction(todoData)
        .then(() => {
          this.task = ''
          SweetAlert.successfulLogin()
        })
        .catch(() => {
          SweetAlert.failureLogin()
        })
    },

    updateTodo (todo) {
      this.updateTodoAction(todo)
        .then(() => SweetAlert.successfulLogin())
        .catch(() => SweetAlert.failureLogin())
    }
  }
}
</script>
