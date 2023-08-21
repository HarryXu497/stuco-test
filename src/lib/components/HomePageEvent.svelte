<script lang="ts">
	export let event: SchoolEvent;
</script>

<div class="event">
	<div class="event__date">
		<span class="event__date__day">
			{event.date.getDate()}
		</span>
		<span class="event__date__month">
			{event.date.toLocaleString('default', { month: 'short' })}
		</span>
	</div>
	<div class="event__info">
		<h3 class="event__info__title">
			{event.name}
		</h3>
		<p class="event__info__description">
			{event.description}
		</p>
	</div>
</div>

<style lang="scss">
	.event {
		background-color: var(--color-light);
	}
</style>