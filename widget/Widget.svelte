<script>
    import { onMount } from 'svelte';
    let randomValue = null;
    let self;
    let system;
    let langs;
  
    let callbacks = {
      settings: function () {},
      init: function () {
        if (self.system().area === "lcard") {
            const min = 0
            const max = AMOCRM.constant('card_id')
            try {
                const response = fetch(`http://localhost/widget/random?min=${min}&max=${max}`)
                
                if (response.ok) {
                    const data = response.json();
                    randomValue = data.randomNumber;
                } else {
                    console.error('Ошибка при получении случайного числа');
                }
            } catch (error) {
                console.error('Ошибка:', error);
            }
            
        }
        return true;
      },
      bind_actions: function () {
        return true;
      },
      render: function () {
        return true;
      },
      dpSettings: function () {},
      advancedSettings: function () {},
      destroy: function () {},
      contacts: {
        selected: function () {}
      },
      onSalesbotDesignerSave: function (handler_code, params) {},
      leads: {
        selected: function () {
            
        }
      },
      onSave: function () {},
      onAddAsSource: function (pipeline_id) {}
    };
  
    onMount(() => {
      self = this;
      system = self.system();
      langs = self.langs;
    });
  </script>
  
  <main>
    {#if $randomValue !== null}
      <p>Случайное число: {$randomValue}</p>
    {:else}
      <p>Загрузка...</p>
    {/if}
  </main>