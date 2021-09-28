<template>
  <div>
    <h2>list</h2>
    <Table :list="data.userContentList" :headers="headers">
      <tr
        class="text-center"
        scope="col"
        v-for="(itm, index) of data.userContentList"
        v-bind:key="index + 1"
      >
        <td>{{ itm.id }}</td>
        <td>{{ itm.titile }}</td>
        <td>
          <div class="flex-row d-flex">
            <div
              v-for="(act, index) of itm.actors"
              v-bind:key="index + 1"
              class="border rounded p-1 m-1"
            >
              {{ act }}
            </div>
          </div>
        </td>
        <td>
          <div class="flex-row d-flex">
            <div
              v-for="(drc, index) of itm.directors"
              v-bind:key="index + 1"
              class="border rounded p-1 m-1"
            >
              {{ drc }}
            </div>
          </div>
        </td>
        <td>{{ itm.description }}</td>
        <td>{{ itm.isAdult ? 'Yes' : 'No' }}</td>
        <td>{{ itm.category }}</td>
        <td>
          <div class="flex-row d-flex">
            <div
              v-for="(permis, index) of itm.permissions"
              v-bind:key="index + 1"
              class="border rounded p-1 m-1"
            >
              {{ permis }}
            </div>
          </div>
        </td>
        <td>{{ itm.isApproved ? 'Yes' : 'No' }}</td>
        <td v-if="itm.actions">
          <div class="d-flex flex-row">
            <Icon
              className="m-1 cursor-pointer"
              v-for="(icn, index) of itm.actions"
              v-bind:key="index + 1"
              type="fas"
              :iconName="icn"
            />
          </div>
        </td>
      </tr>
    </Table>
  </div>
</template>

<script>
import { data } from '../../../../../data/json'
export default {
  data() {
    return {
      data,
      headers: [
        'id',
        'title',
        'actors',
        'directors',
        'description',
        'isAdult',
        'category',
        'permissions',
        'isApproved',
        'actions',
      ],
    }
  },
  beforeCreate() {
    data.userContentList.map(
      (item) => (item['actions'] = { deleteIcon: 'trash', editIcon: 'edit' })
    )
  },
}
</script>

<style scoped></style>
