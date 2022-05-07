<script lang="ts">
import CategoryItem from "../components/CategoryItem.svelte";

</script>

<main class="container mx-auto p-6">
  <div class="flex justify-between">
    <h1 class="text-5xl font-bold">Categories</h1>
    <label for="my-modal" class="btn modal-button">Add Category</label>
  </div>

  <div class="grid grid-cols-4 gap-3 mt-10">
    <CategoryItem id={1} name="Apple"/>
    <CategoryItem id={2} name="Olimtoy"/>
    <CategoryItem id={3} name="JavaX Soft"/>
    <CategoryItem id={4} name="Jurat Production"/>
    <CategoryItem id={5} name="IAM Muxtor Team"/>
  </div>

  <input type="checkbox" id="my-modal" class="modal-toggle">
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-2xl">Create brand </h3>
      <div class="flex flex-col gap-2 mt-4">
        <input type="text" placeholder="Name" class="input input-bordered w-full">        
      </div>
      <div class="modal-action">
        <label for="my-modal" class="btn">Create</label>
      </div>
    </div>
  </div>

</main>