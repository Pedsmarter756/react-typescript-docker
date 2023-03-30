import { Publisher, Subjects, TicketCreatedEvent } from "@cygnetops/common-v2";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
