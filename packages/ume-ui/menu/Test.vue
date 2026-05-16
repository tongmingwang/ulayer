<template>
  <div>
    <h1>UMenu</h1>
    <UMenu>
      <UMenuItem value="1">Item 1</UMenuItem>
      <UMenuItem value="2" color="success">Item 2</UMenuItem>
      <UMenuItem value="3" disabled>Item 3</UMenuItem>
      <USubMenu title="Sub Menu" radius="4px">
        <UMenuItem value="4">Item 4</UMenuItem>
        <UMenuItem value="5">Item 5</UMenuItem>
      </USubMenu>
      <USubMenu title="Sub Sub Menu">
        <UMenuItem value="6">Item 6</UMenuItem>
        <UMenuItem value="7">Item 7</UMenuItem>
      </USubMenu>
    </UMenu>
  </div>
</template>
