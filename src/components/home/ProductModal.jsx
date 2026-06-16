"use client";

import { useState } from "react";
import { Button, Card, Modal, Spinner } from "@heroui/react";
import { getProductById } from "@/lib/api";
import Image from "next/image";

export function ProductModal({ product }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = async () => {
    setIsOpen(true);
    setLoading(true);
    try {
      const result = await getProductById(product.id);
      setData(result);
    } catch (error) {
      console.error("Failed to fetch:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button outside the Modal */}
      <Button onPress={handleOpen} variant="solid" color="primary">
        View Details
      </Button>

      {/* Controlled Modal */}
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[400px]">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Heading>Product Details</Modal.Heading>
              </Modal.Header>

              <Modal.Body>
                {loading ? (
                  <div className="flex justify-center p-8">
                    <Spinner label="Loading..." />
                  </div>
                ) : data ? (
                  <Card variant="default" className="border-none shadow-none">
                    <Image
                      width={150}
                      height={200}
                      src={data.image}
                      alt={data.title}
                      className=" mx-auto"
                    />
                    <Card.Header>
                      <Card.Title className="text-lg">{data.title}</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <p className="text-sm text-gray-500 mb-4">
                        {data.description}
                      </p>
                      <div className="flex justify-between items-center font-bold text-lg">
                        <span>${data.price}</span>
                        <span className="text-yellow-600">
                          ★ {data.rating.rate}
                        </span>
                      </div>
                    </Card.Content>
                  </Card>
                ) : null}
              </Modal.Body>

              <Modal.Footer>
                <Button slot="close" variant="flat">
                  Close
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}
