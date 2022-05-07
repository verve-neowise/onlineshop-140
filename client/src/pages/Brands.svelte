<script lang="ts">
import BrandItem from "../components/BrandItem.svelte";
// 
import { brandStore, fetchBrands, addBrand } from "../store/brand.store";
fetchBrands()

let nameInput: HTMLInputElement
let modalCheck: HTMLInputElement

function create() {
  modalCheck.checked = false
  let name = nameInput.value
  addBrand(name)
}

</script>

<main class="container mx-auto p-6">
  <div class="flex justify-between">
    <h1 class="text-5xl font-bold">Brands</h1>
    <label for="my-modal" class="btn modal-button">Add Brand</label>
  </div>

  <div class="grid grid-cols-4 gap-3 mt-10">
    <!--  -->
    {#each $brandStore as brand}
      <BrandItem id={brand.id} name={brand.name}/>
    {/each}
    <!--  -->
  </div>

  <input bind:this={modalCheck} type="checkbox" id="my-modal" class="modal-toggle">

  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-2xl">Create brand </h3>
      
      <div class="flex flex-col gap-2 mt-4">
        <input bind:this={nameInput} type="text" placeholder="Name" class="input input-bordered w-full">      
      </div>
      
      <div class="modal-action">
        
        <button on:click={create} class="btn btn-primary">Create</button>
        <label for="my-modal" class="btn">Close</label>
      </div>
    </div>
  </div>
</main>