export const ALL_TODOS = 'all';
export const ACTIVE_TODOS = 'active';
export const COMPLETED_TODOS = 'completed';
export const TAGGED_TODOS = 'tagged'; /* mark todo items that have tags as tagged in a similar way to 
active/completed, since a list of tagged items may be a mix of active and completed ones

sort through tagged items and arrange them by tag elsewhere (make sure to ignore case so 'urgent' and 'Urgent' 
are counted as the same tag) */
