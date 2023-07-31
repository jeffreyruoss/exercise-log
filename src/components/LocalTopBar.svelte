<script>
  let isLocalhost = 
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' || 
    window.location.hostname === '192.168.0.56';
</script>

{#if isLocalhost}
  <div id="top-bar" class="pulse">
    <span class="top-bar-title">LOCAL</span>
  </div>
{/if}

<style>
  #top-bar {
    padding: 5px;
    background-color: #CB7E12;
    text-align: center;
  }
  #top-bar .top-bar-title {
    color: #fff;
  }
  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  #top-bar.pulse {
    animation: pulse 300ms cubic-bezier(0.4, 0, 0.6, 1) 3;
  }
</style>
