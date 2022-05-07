<script lang="ts">
  export let id: number
  export let name: string
</script>

<div class="card w-full bg-base-200 shadow-md rounded-md">
  <div class="card-body">
    <h2 class="card-title py-3">
      <span class="badge badge-primary">{id}</span>
      {name}
    </h2>
    <div class="card-actions justify-end">
      <button class="btn btn-primary btn-sm">Delete</button>
    </div>
  </div>
</div>
