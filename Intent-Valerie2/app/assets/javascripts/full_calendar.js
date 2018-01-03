

var initialize_calendar;
initialize_calendar = function() {
	$('.calendar').each(function(){
		var calendar = $(this);
		calendar.fullCalendar({
			header: {
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			selectable: true,
			selectHelper: true,
			editable: true,
			eventLimit: true,
			
			select: function(start, end) {
				$.getScript('/events/new', function(){
					$('#event_date_range').val(moment(start).format("MM/DD/YYYY HH:mm") + ' - ' + moment(end).format("MM/DD/YYYY HH:mm"));
					date_range_picker();
					$('.start_hidden').val(moment(start).format('YYYY-MM-DD HH:mm'));
					$('.end_hidden').val(moment(end).format('YYYY-MM-DD HH:mm'));

				});
				
				calendar.fullCalendar('unselect'); 
			}
		});
	})
};
$(document).on('turbolinks:load', initialize_calendar);