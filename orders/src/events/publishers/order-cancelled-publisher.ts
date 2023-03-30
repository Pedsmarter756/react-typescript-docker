import { Subjects, Publisher, OrderCancelledEvent } from "@cygnetops/common-v2";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
