<script type="ts">
import FM from '../../assets/fm.png';
import WC from '../../assets/wc.png';
import WG from '../../assets/wg.png';
import LH from '../../assets/lh.png';
import NM from '../../assets/nm.png';
import WxC from '../../assets/wxc.png';
import WxG from '../../assets/wxg.png';
import FH from '../../assets/fh.png';

export let moon;
export let width;
</script>

{#if moon === 'F'}
<img src={FM} alt="" {width} />
{:else if moon === 'WG'}
<img src={WG} alt="" {width} />
{:else if moon === 'LQ'}
<img src={LH} alt="" {width} />
{:else if moon === 'WC'}
<img src={WC} alt="" {width} />
{:else if moon === 'N'}
<img src={NM} alt="" {width} />
{:else if moon === 'WxC'}
<img src={WxC} alt="" {width} />
{:else if moon === 'FQ'}
<img src={FH} alt="" {width} />
{:else if moon === 'WxG'}
<img src={WxG} alt="" {width} />
{/if}
