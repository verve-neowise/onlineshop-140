<script lang="ts">
import { removeBrand } from "../store/brand.store";


  export let id: number
  export let name: string

  function remove() {
    removeBrand(id)
  }
</script>

<div class="card w-full bg-base-200 shadow-md rounded-md">
  <div class="card-body">
    <h2 class="card-title py-3">
      <!-- <span class="badge badge-primary">{id}</span> -->
      {name}
    </h2>
    <div class="card-actions justify-end">
      <button on:click={remove} class="btn btn-primary btn-sm">Delete</button>
    </div>
  </div>
</div>
