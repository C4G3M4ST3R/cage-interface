export default function({ store, redirect }) {
  if (!store.getters.assessmentOngoing) redirect('/academy');
}
