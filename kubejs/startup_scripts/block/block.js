BlockEvents.modification(event => {
  event.modify('projecte:dark_matter_block', block => {
    block.destroySpeed = 10
  }); 

  event.modify('projecte:red_matter_block', block => {
    block.destroySpeed = 10
  }); 

  event.modify('sakuratinker:eezo_ore', block =>{
    block.lightEmission = 7
  });
}); 